const https = require('https');

https.get('https://www.spurgeongems.org/spurgeon-sermons/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const regex = /href="([^"]+\.pdf)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(data)) !== null) {
      urls.push(match[1]);
    }
    console.log(`Found ${urls.length} PDFs`);
    console.log(urls.slice(0, 10));
    console.log(urls.slice(-10));
  });
});
