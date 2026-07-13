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
    
    console.log(`Fetching ${translation} - ${book.name}...`);
    
    const chaptersData = new Array(book.chapters);
    const queue = [];
    for (let c = 1; c <= book.chapters; c++) {
      queue.push(c);
    }

    const worker = async () => {
      while (queue.length > 0) {
        const c = queue.shift();
        try {
          // console.log(`  Fetching chapter ${c}...`);
          const res = await fetch(`https://bolls.life/get-text/${translation}/${bookIdx + 1}/${c}/`);
          const verses = await res.json();
          chaptersData[c - 1] = verses;
        } catch (e) {
          console.error(`Error on chapter ${c}`, e);
          chaptersData[c - 1] = [];
        }
      }
    };

    // run 5 workers concurrently
    await Promise.all(Array.from({ length: 5 }, worker));
    
    for (const verses of chaptersData) {
      const cleanVerses = verses.map(v => v.text.replace(/<S>\d+<\/S>/g, '').trim());
      bookData.chapters.push(cleanVerses);
    }
    
    result.push(bookData);
  }
  
  return result;
}

async function run() {
  console.log("Starting ASV download...");
  const asv = await fetchBible('ASV');
  fs.writeFileSync('public/bibles/asv.json', JSON.stringify(asv));
  
  console.log("Starting WEB download...");
  const web = await fetchBible('WEB');
  fs.writeFileSync('public/bibles/web.json', JSON.stringify(web));

  console.log("Starting WLC (Hebrew) download...");
  const wlc = await fetchBible('WLC');
  fs.writeFileSync('public/bibles/wlc.json', JSON.stringify(wlc));

  console.log("Starting TR (Greek) download...");
  const tr = await fetchBible('TR');
  fs.writeFileSync('public/bibles/tr.json', JSON.stringify(tr));
  
  console.log("Done!");
}

run();
