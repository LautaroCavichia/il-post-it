export interface Article {
    id: number;
    title: string;
    summary: string;
    content: string;
    imageUrl: string;
    category: string;
    timestamp: string;
    author?: string;
  }

  export interface Photo {
    id: string | number;
    imageUrl: string;
    title: string;
    description: string;
    category?: string;
  }

  export interface Podcast {
    id: number;
    title: string;
    duration: string;
    date: string;
    imageUrl?: string;
  }
  
  export interface NewsItem {
    id: number;
    timestamp: string;
    text: string;
    category?: string;
  }
  
  export interface NavigationItem {
    id: number;
    title: string;
    url: string;
    children?: NavigationItem[];
  }
  
  export interface SidebarSection {
    title: string;
    articles: Article[];
  }
  
  export type ArticleLayoutType = 'grid' | 'list' | 'featured' | 'columns';