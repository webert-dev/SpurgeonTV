const fs = require('fs');

const BIBLE_BOOKS = [
  { name: 'Genesis', chapters: 50 }, { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 }, { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 }, { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 }, { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 }, { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 }, { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 }, { name: '2 Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 }, { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 }, { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 }, { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 }, { name: 'Song of Solomon', chapters: 8 },
  { name: 'Isaiah', chapters: 66 }, { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 }, { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 }, { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 }, { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 }, { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 }, { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 }, { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 }, { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 }, { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 }, { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 }, { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 }, { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 }, { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 }, { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 }, { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 }, { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 }, { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 }, { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 }, { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 }, { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 }, { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 }, { name: 'Revelation', chapters: 22 }
];

async function fetchBible(translation) {
  const result = [];
  
  for (let bookIdx = 0; bookIdx < BIBLE_BOOKS.length; bookIdx++) {
    const book = BIBLE_BOOKS[bookIdx];
    const bookData = {
      name: book.name,
      abbrev: book.name.substring(0, 3).toLowerCase(),
      chapters: []
    };
    
    const chaptersData = new Array(book.chapters);
    const queue = [];
    for (let c = 1; c <= book.chapters; c++) queue.push(c);

    while (queue.length > 0) {
      const c = queue[0];
      try {
        const res = await fetch(`https://bolls.life/get-text/${translation}/${bookIdx + 1}/${c}/`);
        if (res.status === 429) {
          console.log(`Rate limited! Waiting 10s...`);
          await new Promise(r => setTimeout(r, 10000));
          continue;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const verses = await res.json();
        chaptersData[c - 1] = verses;
        queue.shift(); // Success, remove from queue
        await new Promise(r => setTimeout(r, 200)); // 200ms delay to prevent 429
      } catch (e) {
        console.error(`Error on ${translation} book ${bookIdx + 1} chapter ${c}`, e.message);
        chaptersData[c - 1] = [];
        queue.shift();
      }
    }
    
    for (const verses of chaptersData) {
      if (Array.isArray(verses)) {
        const cleanVerses = verses.map(v => v.text ? v.text.replace(/<S>\d+<\/S>/g, '').trim() : '');
        bookData.chapters.push(cleanVerses);
      } else {
        bookData.chapters.push([]);
      }
    }
    result.push(bookData);
  }
  return result;
}

const translationsToDownload = [
  'FRLSG', 'LUT', 'CUV', 'SYNOD', 'SVD', 'VULG', 'DSV', 'KRV', 'VI1934', 'BG'
];

async function run() {
  for (const trans of translationsToDownload) {
    const filePath = `public/bibles/${trans.toLowerCase()}.json`;
    if (!fs.existsSync(filePath)) {
      console.log(`Starting ${trans} download...`);
      const data = await fetchBible(trans);
      fs.writeFileSync(filePath, JSON.stringify(data));
      console.log(`Finished ${trans}.`);
    } else {
      console.log(`${trans} already exists, skipping.`);
    }
  }
  console.log("All extra downloads done!");
}

run();
