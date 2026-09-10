import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const publicSermons = path.join(ROOT, 'public', 'data', 'sermons');
const publicDevotional = path.join(ROOT, 'public', 'data', 'devotional');
const contentSermons = path.join(ROOT, 'content', 'data', 'sermons');
const contentDevotional = path.join(ROOT, 'content', 'data', 'devotional');

async function copyDir(src, dest) {
  try {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`Error copying ${src} to ${dest}:`, err);
    }
  }
}

async function main() {
  console.log('--- Preparing Content for Vercel Serverless Functions ---');
  await copyDir(publicSermons, contentSermons);
  await copyDir(publicDevotional, contentDevotional);
  console.log('Content preparation complete.');
}

main().catch(console.error);
