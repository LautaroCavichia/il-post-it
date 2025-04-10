import { Article, NewsItem, NavigationItem } from '../types';

const categories = [
  'ITALIA', 'MONDO', 'POLITICA', 'TECNOLOGIA', 
  'INTERNET', 'SCIENZA', 'CULTURA', 'ECONOMIA', 
  'SPORT', 'MODA', 'LIBRI', 'CONSUMISMI', 'STORIE/IDEE', 'DA COSTA A COSTA'
];

const timestamps = [
  '08:08', '07:47', '23:08', '22:15', '21:55', '17:11'
];

// Generate a random lorem ipsum paragraph
const generateLoremIpsum = (sentences: number = 3): string => {
  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 
    'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 
    'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
  ];
  
  let result = '';
  
  for (let i = 0; i < sentences; i++) {
    const sentenceLength = 5 + Math.floor(Math.random() * 10);
    let sentence = '';
    
    for (let j = 0; j < sentenceLength; j++) {
      const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
      sentence += j === 0 ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1) : randomWord;
      sentence += j === sentenceLength - 1 ? '. ' : ' ';
    }
    
    result += sentence;
  }
  
  return result.trim();
};

// Generate random image URL from Lorem Picsum
const generateRandomImageUrl = (width: number = 800, height: number = 600): string => {
  const id = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};

// Generate mock articles
export const generateMockArticles = (count: number): Article[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    title: generateLoremIpsum(1),
    summary: generateLoremIpsum(2),
    content: generateLoremIpsum(8),
    imageUrl: generateRandomImageUrl(),
    category: categories[Math.floor(Math.random() * categories.length)],
    timestamp: timestamps[Math.floor(Math.random() * timestamps.length)],
    author: Math.random() > 0.5 ? 'Lorem Author' : undefined
  }));
};

// Generate mock news items for the ticker
export const generateNewsItems = (count: number): NewsItem[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    timestamp: timestamps[Math.floor(Math.random() * timestamps.length)],
    text: generateLoremIpsum(1),
    category: Math.random() > 0.3 ? categories[Math.floor(Math.random() * categories.length)] : undefined
  }));
};

// Generate main navigation items
export const generateNavigationItems = (): NavigationItem[] => {
  return categories.map((category, index) => ({
    id: index + 1,
    title: category,
    url: `/${category.toLowerCase()}`
  }));
};