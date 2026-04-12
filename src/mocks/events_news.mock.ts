import { AppEvent, NewsPost } from '../types';

export const EVENTS_MOCK: AppEvent[] = [
  {
    id: 'e1',
    title: 'Eclipse Solar em Mosqueiro',
    description: 'Acompanhe conosco o grande eclipse solar anular direto da praia do Farol.',
    startDate: '2026-05-15T14:30:00Z',
    location: 'Praia do Farol, Mosqueiro',
    coverImage: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=1000',
    category: 'praia',
    isPublished: true,
    tags: ['Eclipse', 'Evento Especial']
  },
  {
    id: 'e2',
    title: 'Lançamento de Foguetes na Praça',
    description: 'Traga sua garrafa PET e venha aprender a construir um foguete real.',
    startDate: '2026-04-20T09:00:00Z',
    location: 'Praça da República, Belém',
    coverImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1000',
    category: 'foguetes',
    isPublished: true,
    tags: ['Oficina', 'PET']
  }
];

export const NEWS_MOCK: NewsPost[] = [
  {
    id: 'n1',
    slug: 'novas-descobertas-jwst',
    title: 'O que o James Webb revelou esta semana?',
    excerpt: 'Analisamos as últimas imagens enviadas pelo telescópio espacial mais potente da história.',
    content: '<p>O Telescópio Espacial James Webb continua a surpreender...</p>',
    coverImage: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000',
    author: { name: 'Thalison Wilker' },
    publishedAt: '2026-04-10T10:00:00Z',
    category: 'Ciência',
    tags: ['JWST', 'Nasa', 'Espaço'],
    isPublished: true
  }
];
