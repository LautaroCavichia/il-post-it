import { Article, NewsItem, NavigationItem, Podcast, Photo } from '../types';

const categories = [
  'ITALIA', 'MONDO', 'POLITICA', 'TECNOLOGIA', 
  'INTERNET', 'SCIENZA', 'CULTURA', 'ECONOMIA', 
  'SPORT', 'MODA', 'LIBRI', 'CONSUMISMI', 'STORIE/IDEE', 'DA COSTA A COSTA'
];

const timestamps = [
  '08:08', '07:47', '23:08', '22:15', '21:55', '17:11', 
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

export function getMockAlt(title: string): string {
  const words = title.split(' ').filter(w => w.length > 2);
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex] || 'article';

  const variations = [
    `Image related to ${word}`,
    `Illustration for ${word}`,
    `Visual for ${word}`,
    `Featured image: ${word}`,
    `Cover showing ${word}`
  ];

  const variationIndex = Math.floor(Math.random() * variations.length);
  return variations[variationIndex];
}

// Generate random image URL from Lorem Picsum
const generateRandomImageUrl = (width: number = 1280, height: number = 720): string => {
  // return `https://placehold.co/${width}x${height}/gold/white?text={Lorem+Ipsum}`;
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
};

// Generate mock articles
export const generateMockArticles = (count: number): Article[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    title: generateLoremIpsum(0.5),
    summary: generateLoremIpsum(2),
    content: generateLoremIpsum(8),
    imageUrl: generateRandomImageUrl(),
    category: categories[Math.floor(Math.random() * categories.length)],
    timestamp: timestamps[Math.floor(Math.random() * timestamps.length)],
    author: Math.random() > 0.5 ? 'Lorem Author' : undefined
  }));
};

export const generateMockPhotos = (count: number): Photo[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    imageUrl: generateRandomImageUrl(300, 300),
    title: generateLoremIpsum(0.5),
    description: generateLoremIpsum(1)
  }));
}

export const generateMockPodcasts = (count: number): Podcast[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    title: generateLoremIpsum(0.5),
    duration: `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')}`,
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
    imageUrl: generateRandomImageUrl(300, 300)
  }));
}


// Generate mock news items for the ticker
export const generateNewsItems = (count: number): NewsItem[] => {
  return Array(count).fill(null).map((_, index) => ({
    id: index + 1,
    timestamp: timestamps[Math.floor(Math.random() * timestamps.length)],
    text: generateLoremIpsum(1.5),
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