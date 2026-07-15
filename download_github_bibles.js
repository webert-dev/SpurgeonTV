const fs = require('fs');

const bibles = {
  'zh_ncv': 'ncv',
  'el_greek': 'el',
  'eo_esperanto': 'eo',
  'fi_finnish': 'fi',
  'fi_pr': 'pr',
  'ro_cornilescu': 'ro',
  'pt_aa': 'aa'
};

async function download() {
  for (const [remote, local] of Object.entries(bibles)) {
    console.log(`Downloading ${remote}...`);
    const res = await fetch(`https://raw.githubusercontent.com/thiagobodruk/bible/master/json/${remote}.json`);
    const data = await res.text();
    fs.writeFileSync(`public/bibles/${local}.json`, data);
  }
  console.log("Done downloading from GitHub!");
}
download();
