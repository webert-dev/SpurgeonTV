const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const dataPath = path.join(__dirname, '../public/data/morning-and-evening.json');
const outPtPath = path.join(__dirname, '../public/data/morning-and-evening-pt.json');
const outEsPath = path.join(__dirname, '../public/data/morning-and-evening-es.json');

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  
  // Create copies for mutation
  const ptData = JSON.parse(JSON.stringify(data));
  const esData = JSON.parse(JSON.stringify(data));

  console.log(`Loaded ${data.length} entries.`);
  
  // To avoid hitting translation limits with 744 large strings, we will process in chunks
  const chunkSize = 10;
  
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    console.log(`Processing chunk ${i} to ${i + chunkSize - 1}...`);
    
    // We need to translate both keyverse and body for both languages
    // Combine them into a single array to batch
    const ptInput = [];
    const esInput = [];
    
    chunk.forEach(item => {
      if (item) {
        ptInput.push(item.keyverse);
        ptInput.push(item.body);
        esInput.push(item.keyverse);
        esInput.push(item.body);
      }
    });

    if (ptInput.length === 0) continue;

    try {
      // Translate PT
      const resPt = await translate(ptInput, { to: 'pt', forceBatch: false });
      // Translate ES
      const resEs = await translate(esInput, { to: 'es', forceBatch: false });

      // Map back to data
      let offset = 0;
      for (let j = 0; j < chunk.length; j++) {
        const itemIndex = i + j;
        const item = chunk[j];
        
        if (item) {
          // Results are arrays because input was an array
          ptData[itemIndex].keyverse = Array.isArray(resPt) ? resPt[offset * 2].text : resPt.text;
          ptData[itemIndex].body = Array.isArray(resPt) ? resPt[offset * 2 + 1].text : resPt.text;
          
          esData[itemIndex].keyverse = Array.isArray(resEs) ? resEs[offset * 2].text : resEs.text;
          esData[itemIndex].body = Array.isArray(resEs) ? resEs[offset * 2 + 1].text : resEs.text;
          offset++;
        }
      }
      
      // Save progress so we don't lose data if it crashes
      fs.writeFileSync(outPtPath, JSON.stringify(ptData, null, 2));
      fs.writeFileSync(outEsPath, JSON.stringify(esData, null, 2));

      await delay(2000); // Wait 2s between chunks
    } catch (err) {
      console.error(`Error processing chunk at index ${i}:`, err.message);
      // Let's pause longer on error and retry once
      console.log('Waiting 10 seconds before retrying...');
      await delay(10000);
      try {
        const resPt = await translate(ptInput, { to: 'pt' });
        const resEs = await translate(esInput, { to: 'es' });
        
        let offset = 0;
        for (let j = 0; j < chunk.length; j++) {
          const itemIndex = i + j;
          const item = chunk[j];
          if (item) {
            ptData[itemIndex].keyverse = Array.isArray(resPt) ? resPt[offset * 2].text : resPt.text;
            ptData[itemIndex].body = Array.isArray(resPt) ? resPt[offset * 2 + 1].text : resPt.text;
            esData[itemIndex].keyverse = Array.isArray(resEs) ? resEs[offset * 2].text : resEs.text;
            esData[itemIndex].body = Array.isArray(resEs) ? resEs[offset * 2 + 1].text : resEs.text;
            offset++;
          }
        }
        
        fs.writeFileSync(outPtPath, JSON.stringify(ptData, null, 2));
        fs.writeFileSync(outEsPath, JSON.stringify(esData, null, 2));
      } catch (err2) {
        console.error('Failed retry. Aborting to save progress.', err2.message);
        break; // Stop loop, we have saved up to here
      }
    }
  }
  
  console.log('Translation completed or aborted. Files saved.');
}

run();
