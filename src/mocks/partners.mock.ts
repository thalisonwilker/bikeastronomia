export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  category: 'instituicao' | 'escola' | 'empresa';
}

export const PARTNERS_MOCK: Partner[] = [
  {
    id: 'p1',
    name: 'UFPA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Bras%C3%A3o_da_UFPA.png/200px-Bras%C3%A3o_da_UFPA.png',
    category: 'instituicao'
  },
  {
    id: 'p2',
    name: 'OBA',
    logo: 'https://www.oba.org.br/site/static/img/layout/logo.png',
    category: 'instituicao'
  },
  {
    id: 'p3',
    name: 'Clube de Astronomia do Pará',
    logo: 'https://images.unsplash.com/photo-1516339901600-2e1a6298ed74?auto=format&fit=crop&q=80&w=200',
    category: 'instituicao'
  },
  {
    id: 'p4',
    name: 'Escola Municipal de Belém',
    logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=200',
    category: 'escola'
  }
];
