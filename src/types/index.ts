export type EventCategory = 'cine' | 'foguetes' | 'olimpiada' | 'comunidade' | 'praia' | 'cientifico' | 'kids';

export interface EducationalAction {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  tags: string[];
  icon: string;
  color: string;
  isActive: boolean;
  createdAt: string;
}

export interface AppEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  address?: string;
  coverImage: string;
  category: EventCategory;
  isPublished: boolean;
  registrationUrl?: string;
  maxParticipants?: number;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  thumbnailUrl: string;
  type: 'photo' | 'video';
  action?: string;
  takenAt: string;
  tags: string[];
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  category: string;
  tags: string[];
  isPublished: boolean;
}
