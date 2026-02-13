
export type Page = 'home' | 'about' | 'team' | 'gallery' | 'blog' | 'contact';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Splash {
  id: number;
  x: number;
  y: number;
}
