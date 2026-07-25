const fs = require('fs');
const path = require('path');

// This script reads a text file containing "HTML code" exports from Up-4Ever,
// and automatically maps them to the correct volume and sermon ID in sermon_downloads.json.
//
// Expected input format (HTML Code from Up-4Ever):
// <a href="https://www.up-4ever.net/w1ijyos18g1c" target=_blank>chs1.pdf - 110 KB</a>

const INPUT_FILE = path.join(__dirname, 'uploaded-links.txt');
const JSON_FILE = path.join(__dirname, '..', 'lib', 'sermon_downloads.json');
const SERMONS_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-main');

function buildSermonVolumeMap() {
  const map = {};
  if (!fs.existsSync(SERMONS_DIR)) return map;

  const volumes = fs.readdirSync(SERMONS_DIR).filter(d => d.startsWith('volume-'));
  
  for (const vol of volumes) {
    const volNum = parseInt(vol.replace('volume-', ''), 10);
    const volPath = path.join(SERMONS_DIR, vol);
    
    if (fs.statSync(volPath).isDirectory()) {
      const files = fs.readdirSync(volPath);
      for (const file of files) {
        if (file.startsWith('sermon') && file.endsWith('.md')) {
          // extract exact sermon id (e.g. "1" or "7-8")
          const match = file.match(/sermon[-_]([0-9\-]+)\.md/);
          if (match) {
            // Also store the raw ID string so we map "7-8" exactly to "sermon-7-8"
            const sermonId = match[1];
            // Get the first number for basic matching
            const primaryNum = parseInt(sermonId.split('-')[0], 10);
            map[primaryNum] = {
              volume: vol,
              sermonKey: `sermon-${sermonId}`
            };
          }
        }
      }
    }
  }
  return map;
}

function updateDownloads() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.log(`Please create ${INPUT_FILE} and paste the HTML codes from Up-4Ever inside it.`);
    return;
  }

  const fileContent = fs.readFileSync(INPUT_FILE, 'utf-8');
  const lines = fileContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  let db = {};
  if (fs.existsSync(JSON_FILE)) {
    try {
      db = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));
    } catch(e) {
      db = {};
    }
  }

  const sermonMap = buildSermonVolumeMap();
  let updatedCount = 0;

  // Regex to match:
  // href="URL" ... >chsNUMBER.pdf
  const regex = /href="([^"]+)"[^>]*>chs(\d+(?:-\d+)?[A-Z]?)\.pdf/i;

  for (const line of lines) {
    const match = line.match(regex);
    if (match) {
      const url = match[1];
      const rawNumberStr = match[2]; // e.g. "1" or "7-8" or "1451A"
      
      // Extract the primary integer for mapping
      const primaryNum = parseInt(rawNumberStr.match(/\d+/)[0], 10);
      
      const sermonInfo = sermonMap[primaryNum];
      if (sermonInfo) {
        const fullKey = `${sermonInfo.volume}::${sermonInfo.sermonKey}`;
        
        if (!db[fullKey]) {
          db[fullKey] = {};
        }
        
        // Save the up4ever link
        db[fullKey].up4ever = url;
        updatedCount++;
      } else {
        console.warn(`Warning: Could not find a volume for sermon chs${rawNumberStr}.pdf`);
      }
    }
  }

  fs.writeFileSync(JSON_FILE, JSON.stringify(db, null, 2));
  console.log(`Successfully updated ${updatedCount} links in sermon_downloads.json!`);
}

updateDownloads();
