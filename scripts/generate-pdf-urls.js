const fs = require('fs');
const path = require('path');
const https = require('https');

// Scrapes the official Sermon page of spurgeongems.org
// Grouping output by Volume to make manual uploading easier.

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

function buildSermonVolumeMap() {
  const map = {};
  const sermonsDir = path.join(__dirname, '..', 'chspurgeon-sermons-main');
  
  if (!fs.existsSync(sermonsDir)) return map;

  const volumes = fs.readdirSync(sermonsDir).filter(d => d.startsWith('volume-'));
  
  for (const vol of volumes) {
    const volNum = parseInt(vol.replace('volume-', ''), 10);
    const volPath = path.join(sermonsDir, vol);
    
    if (fs.statSync(volPath).isDirectory()) {
      const files = fs.readdirSync(volPath);
      for (const file of files) {
        if (file.startsWith('sermon') && file.endsWith('.md')) {
          // e.g. sermon-1.md, sermon_348.md, or sermon-7-8.md
          const match = file.match(/sermon[-_](\d+)/);
          if (match) {
            map[parseInt(match[1], 10)] = volNum;
          }
        }
      }
    }
  }
  return map;
}

async function generateUrls() {
  const url = 'https://www.spurgeongems.org/spurgeon-sermons/';
  console.log(`Fetching official sermon list from ${url}...`);
  
  try {
    const sermonToVol = buildSermonVolumeMap();
    const html = await fetchHtml(url);
    
    const regex = /href="([^"]*?\/sermon\/chs(\d+)[^"]*\.pdf)"/g;
    let match;
    
    const volumeGroups = {}; // volNum -> array of links
    let unmapped = [];
    
    while ((match = regex.exec(html)) !== null) {
      let link = match[1];
      const sermonNum = parseInt(match[2], 10);
      
      if (link.startsWith('/sermon/')) {
        link = 'https://www.spurgeongems.org' + link;
      }
      
      const volNum = sermonToVol[sermonNum];
      if (volNum) {
        if (!volumeGroups[volNum]) volumeGroups[volNum] = [];
        volumeGroups[volNum].push(link);
      } else {
        unmapped.push(link);
      }
    }

    const outputLines = [];
    
    // Sort by volume
    const sortedVols = Object.keys(volumeGroups).map(Number).sort((a,b) => a - b);
    
    for (const vol of sortedVols) {
      outputLines.push(`\n============================`);
      outputLines.push(`VOLUME ${vol.toString().padStart(2, '0')}`);
      outputLines.push(`============================\n`);
      outputLines.push(...volumeGroups[vol]);
    }
    
    if (unmapped.length > 0) {
      outputLines.push(`\n============================`);
      outputLines.push(`UNMAPPED / EXTRAS`);
      outputLines.push(`============================\n`);
      outputLines.push(...unmapped);
    }

    const outputPath = path.join(__dirname, 'pdf-urls-for-upload.txt');
    fs.writeFileSync(outputPath, outputLines.join('\n').trim());
    
    console.log(`Successfully grouped and saved URLs!`);
    console.log(`Saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching directory:', error.message);
  }
}

generateUrls();
