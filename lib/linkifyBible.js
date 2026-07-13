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
  'I John': '1 John', 'II John': '2 John', 'III John': '3 John', 'First John': '1 John', 'Second John': '2 John', 'Third John': '3 John'
};

// Sort by length descending to match "1 John" before "John"
const sortedBooks = [...ENGLISH_BOOKS].sort((a, b) => b.length - a.length);

// Escape regex special chars just in case
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Build a regex that captures: (Book Name) (Chapter):(Verse)(-(EndVerse))?
const bookPattern = sortedBooks.map(escapeRegex).join('|');
// Using word boundary \b and capturing groups.
// $1 = Book, $2 = Chapter, $3 = Verse, $4 = Optional -EndVerse
const BIBLE_REF_REGEX = new RegExp(`\\b(${bookPattern})\\s+(\\d+):(\\d+)(?:-(\\d+))?\\b`, 'gi');

export function linkifyBibleReferences(text) {
  if (!text) return text;
  
  return text.replace(BIBLE_REF_REGEX, (match, book, chapter, verse, endVerse) => {
    // Normalize book name to standard Title Case (e.g., "1 John", "Psalms")
    // First, convert whatever matched to standard casing as defined in our list
    let standardBook = sortedBooks.find(b => b.toLowerCase() === book.toLowerCase()) || book;
    // Then normalize variants
    standardBook = BOOK_NORMALIZER[standardBook] || standardBook;
    
    let refString = `${standardBook} ${chapter}:${verse}`;
    if (endVerse) {
      refString += `-${endVerse}`;
    }

    return `<span class="bible-ref-marker" data-book="${standardBook}" data-chapter="${chapter}" data-verse="${verse}" ${endVerse ? `data-end-verse="${endVerse}"` : ''}>${match}</span>`;
  });
}
