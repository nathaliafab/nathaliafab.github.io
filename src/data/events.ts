import type { L } from './types';

export type EventType = 'talk' | 'hackathon' | 'award' | 'conference';

export interface EventItem {
  id: string;
  /** AAAA-MM */
  date: string;
  title: L;
  place?: L;
  detail?: L;
  type: EventType;
  /** Site oficial do evento */
  url?: string;
  /** id de um projeto em projects.ts relacionado ao evento */
  project?: string;
  /** id de um artigo em papers.ts relacionado ao evento */
  paper?: string;
}

export const events: EventItem[] = [
  {
    id: 'converge',
    date: '2026-11',
    title: { pt: 'Converge Challenge', en: 'Converge Challenge' },
    place: { pt: 'Recife, PE', en: 'Recife, PE' },
    type: 'hackathon',
    url: 'https://convergechallenge.cin.ufpe.br/',
    project: 'peneiria',
  },
  {
    id: 'icse',
    date: '2026-04',
    title: { pt: 'ICSE 2026', en: 'ICSE 2026' },
    place: { pt: 'Rio de Janeiro, RJ', en: 'Rio de Janeiro, RJ' },
    detail: {
      pt: 'Apresentação de pôster do artigo do JSERD',
      en: 'Poster presentation of the JSERD paper',
    },
    type: 'conference',
    paper: 'jserd-2026',
    url: 'https://conf.researchr.org/home/icse-2026',
  },
  {
    id: 'cbsoft',
    date: '2025-09',
    title: { pt: 'CBSoft 2025 / X SAST', en: 'CBSoft 2025 / X SAST' },
    place: { pt: 'Recife, PE', en: 'Recife, PE' },
    detail: {
      pt: 'Apresentação do artigo premiado sobre detecção de conflitos semânticos',
      en: 'Presentation of the award-winning paper on semantic conflict detection',
    },
    type: 'talk',
    paper: 'sast-2025',
    url: 'https://cbsoft.sbc.org.br/2025/cbsoft/?lang=pt',
  },
  {
    id: 'treasurehacks',
    date: '2023-05',
    title: { pt: 'Treasure Hacks 3.5', en: 'Treasure Hacks 3.5' },
    place: { pt: 'Online, mundial', en: 'Online, worldwide' },
    type: 'hackathon',
    url: 'https://hackathon.treasurehacks.org/previous/v3-5.html',
    project: 'fantasylab',
  },
];
