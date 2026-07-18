export const ENGLISH_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
  '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Psalms', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians',
  'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation',
  // Variants
  'I Samuel', 'II Samuel', 'I Kings', 'II Kings', 'I Chronicles', 'II Chronicles',
  'I Corinthians', 'II Corinthians', 'I Thessalonians', 'II Thessalonians',
  'I Timothy', 'II Timothy', 'I Peter', 'II Peter', 'I John', 'II John', 'III John',
  'First Samuel', 'Second Samuel', 'First Kings', 'Second Kings', 'First Chronicles', 'Second Chronicles',
  'First Corinthians', 'Second Corinthians', 'First Thessalonians', 'Second Thessalonians',
  'First Timothy', 'Second Timothy', 'First Peter', 'Second Peter', 'First John', 'Second John', 'Third John'
];

// Map variants back to standard index names (matching standard JSON files which are 1-indexed by book)
const BOOK_NORMALIZER = {
  'Psalm': 'Psalms',
  'I Samuel': '1 Samuel', 'II Samuel': '2 Samuel', 'First Samuel': '1 Samuel', 'Second Samuel': '2 Samuel',
  'I Kings': '1 Kings', 'II Kings': '2 Kings', 'First Kings': '1 Kings', 'Second Kings': '2 Kings',
  'I Chronicles': '1 Chronicles', 'II Chronicles': '2 Chronicles', 'First Chronicles': '1 Chronicles', 'Second Chronicles': '2 Chronicles',
  'I Corinthians': '1 Corinthians', 'II Corinthians': '2 Corinthians', 'First Corinthians': '1 Corinthians', 'Second Corinthians': '2 Corinthians',
  'I Thessalonians': '1 Thessalonians', 'II Thessalonians': '2 Thessalonians', 'First Thessalonians': '1 Thessalonians', 'Second Thessalonians': '2 Thessalonians',
  'I Timothy': '1 Timothy', 'II Timothy': '2 Timothy', 'First Timothy': '1 Timothy', 'Second Timothy': '2 Timothy',
  'I Peter': '1 Peter', 'II Peter': '2 Peter', 'First Peter': '1 Peter', 'Second Peter': '2 Peter',
  'I John': '1 John', 'II John': '2 John', 'III John': '3 John', 'First John': '1 John', 'Second John': '2 John', 'Third John': '3 John',
  
  // Portuguese
  'Gênesis': 'Genesis', 'Êxodo': 'Exodus', 'Levítico': 'Leviticus', 'Números': 'Numbers', 'Deuteronômio': 'Deuteronomy', 'Josué': 'Joshua', 'Juízes': 'Judges', 'Rute': 'Ruth',
  '1 Reis': '1 Kings', '2 Reis': '2 Kings', '1 Crônicas': '1 Chronicles', '2 Crônicas': '2 Chronicles', 'Esdras': 'Ezra', 'Neemias': 'Nehemiah', 'Ester': 'Esther', 'Jó': 'Job',
  'Salmos': 'Psalms', 'Salmo': 'Psalms', 'Provérbios': 'Proverbs', 'Eclesiastes': 'Ecclesiastes', 'Cânticos': 'Song of Solomon', 'Cântico dos Cânticos': 'Song of Solomon',
  'Isaías': 'Isaiah', 'Jeremias': 'Jeremiah', 'Lamentações': 'Lamentations', 'Ezequiel': 'Ezekiel', 'Oseias': 'Hosea', 'Amós': 'Amos', 'Obadias': 'Obadiah', 'Jonas': 'Jonah',
  'Miqueias': 'Micah', 'Naum': 'Nahum', 'Habacuque': 'Habakkuk', 'Sofonias': 'Zephaniah', 'Ageu': 'Haggai', 'Zacarias': 'Zechariah', 'Malaquias': 'Malachi',
  'Mateus': 'Matthew', 'Marcos': 'Mark', 'Lucas': 'Luke', 'João': 'John', 'Atos': 'Acts', 'Romanos': 'Romans',
  '1 Coríntios': '1 Corinthians', '2 Coríntios': '2 Corinthians', 'Gálatas': 'Galatians', 'Efésios': 'Ephesians', 'Filipenses': 'Philippians', 'Colossenses': 'Colossians',
  '1 Tessalonicenses': '1 Thessalonians', '2 Tessalonicenses': '2 Thessalonians', '1 Timóteo': '1 Timothy', '2 Timóteo': '2 Timothy', 'Tito': 'Titus', 'Filemom': 'Philemon',
  'Hebreus': 'Hebrews', 'Tiago': 'James', '1 Pedro': '1 Peter', '2 Pedro': '2 Peter', '1 João': '1 John', '2 João': '2 John', '3 João': '3 John', 'Judas': 'Jude', 'Apocalipse': 'Revelation',

  // Spanish
  'Génesis': 'Genesis', 'Éxodo': 'Exodus', 'Deuteronomio': 'Deuteronomy', 'Jueces': 'Judges', 'Rut': 'Ruth', '1 Reyes': '1 Kings', '2 Reyes': '2 Kings', '1 Crónicas': '1 Chronicles', '2 Crónicas': '2 Chronicles',
  'Nehemías': 'Nehemiah', 'Cantares': 'Song of Solomon', 'Jeremías': 'Jeremiah', 'Oseas': 'Hosea', 'Abdías': 'Obadiah', 'Miqueas': 'Micah', 'Nahúm': 'Nahum', 'Habacuc': 'Habakkuk', 'Sofonías': 'Zephaniah', 'Hageo': 'Haggai', 'Zacarías': 'Zechariah', 'Malaquías': 'Malachi',
  'Hechos': 'Acts', '1 Corintios': '1 Corinthians', '2 Corintios': '2 Corinthians', 'Gálatas': 'Galatians', 'Efesios': 'Ephesians', 'Colosenses': 'Colossians',
  '1 Tesalonicenses': '1 Thessalonians', '2 Tesalonicenses': '2 Thessalonians', '1 Timoteo': '1 Timothy', '2 Timoteo': '2 Timothy', 'Filemón': 'Philemon', 'Santiago': 'James', 'Apocalipsis': 'Revelation'
};

// Generate list of all known book names (English, PT, ES)
const ALL_BOOKS = Array.from(new Set([...ENGLISH_BOOKS, ...Object.keys(BOOK_NORMALIZER)]));

// Sort by length descending to match "1 John" before "John"
const sortedBooks = [...ALL_BOOKS].sort((a, b) => b.length - a.length);

// Escape regex special chars just in case
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build a regex that captures: (Book Name) (Chapter):(Verse)(-(EndVerse))?
const bookPattern = sortedBooks.map(escapeRegex).join('|');
// Using word boundary \b is tricky with accented characters (like á, í), so we use a permissive boundary
// (^|\s|["'([{<>])
// $1 = prefix, $2 = Book, $3 = Chapter, $4 = Verse, $5 = Optional -EndVerse
const BIBLE_REF_REGEX = new RegExp(`(^|\\s|["'([{}<>])(${bookPattern})\\s+(\\d+):(\\d+)(?:-(\\d+))?(?=$|\\s|[.,;:"')\\]}><])`, 'gi');

export function linkifyBibleReferences(text) {
  if (!text) return text;
  
  return text.replace(BIBLE_REF_REGEX, (match, prefix, book, chapter, verse, endVerse) => {
    // Normalize book name to standard Title Case (e.g., "1 John", "Psalms")
    let standardBook = sortedBooks.find(b => b.toLowerCase() === book.toLowerCase()) || book;
    standardBook = BOOK_NORMALIZER[standardBook] || standardBook;
    
    const matchedRef = match.substring(prefix.length); // Remove prefix from the actual linkified part
    
    return `${prefix}<span class="bible-ref-marker" data-book="${standardBook}" data-chapter="${chapter}" data-verse="${verse}" ${endVerse ? `data-end-verse="${endVerse}"` : ''}>${matchedRef}</span>`;
  });
}
