const fs = require('fs');
const path = require('path');
const https = require('https');

// This script dynamically scrapes the directory listing of spurgeongems.org
// to get the exact filenames of all PDFs, avoiding 404 errors for non-standard filenames.

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

async function generateUrls() {
  const baseUrl = 'https://www.spurgeongems.org/sermon/';
  console.log(`Fetching directory listing from ${baseUrl}...`);
  
  try {
    const html = await fetchHtml(baseUrl);
    
    // Match all hrefs ending in .pdf
    // <a href="chs001.pdf">
    const regex = /href="([^"]+\.pdf)"/g;
    let match;
    const urls = [];
    
    while ((match = regex.exec(html)) !== null) {
      let filename = match[1];
      // Note: Some filenames in the href are already URL encoded (e.g. %20), some are not. 
      // The browser/Up-4Ever usually handles either, but let's just append the raw href value.
      urls.push(baseUrl + filename);
    }

    if (urls.length === 0) {
      console.error('No PDFs found! The directory listing might have changed.');
      return;
    }

    const outputPath = path.join(__dirname, 'pdf-urls-for-upload.txt');
    fs.writeFileSync(outputPath, urls.join('\n'));
    console.log(`Successfully extracted ${urls.length} PDF URLs!`);
    console.log(`Saved to ${outputPath}`);
    console.log('You can now copy the contents of this file and paste it into the Remote Upload page of Up-4Ever or FileUpload.');
  } catch (error) {
    console.error('Error fetching directory:', error.message);
  }
}

generateUrls();
