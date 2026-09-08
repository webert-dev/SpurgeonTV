import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const publicSermonsDir = path.join(ROOT, 'public', 'data', 'sermons');

// Clear and recreate public/data/sermons
if (fs.existsSync(publicSermonsDir)) {
  fs.rmSync(publicSermonsDir, { recursive: true, force: true });
}
fs.mkdirSync(publicSermonsDir, { recursive: true });

const langs = [
  { lang: 'en', src: 'chspurgeon-sermons-main' }
];

for (const { lang, src } of langs) {
  const srcPath = path.join(ROOT, src);
  const destPath = path.join(publicSermonsDir, lang);
  
  if (!fs.existsSync(srcPath)) continue;

  fs.mkdirSync(destPath, { recursive: true });

  const volumes = fs.readdirSync(srcPath).filter(f => f.startsWith('volume-') && fs.statSync(path.join(srcPath, f)).isDirectory());

  for (const vol of volumes) {
    const srcVolPath = path.join(srcPath, vol);
    const destVolPath = path.join(destPath, vol);
    
    fs.mkdirSync(destVolPath, { recursive: true });

    const files = fs.readdirSync(srcVolPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
      fs.copyFileSync(path.join(srcVolPath, file), path.join(destVolPath, file));
    }
  }
  
  console.log(`Copied ${lang.toUpperCase()} sermons to public/data/sermons/${lang}`);
}
