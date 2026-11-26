import type { L } from './types';

export interface Paper {
  id: string;
  title: L;
  authors: string[];
  venue: L;
  year: string;
  note?: L;
  /** Todos opcionais: mostra só os botões que existirem. */
  links: { paper?: string; doi?: string; data?: string };
}

export const papers: Paper[] = [
  {
    id: 'jserd-2026',
    title: {
      pt: 'Assessing the effectiveness of Large Language Models in detecting semantic conflicts',
      en: 'Assessing the effectiveness of Large Language Models in detecting semantic conflicts',
    },
    authors: ['Nathalia Barbosa', 'Paulo Borba', 'Léuson Da Silva'],
    venue: {
      pt: 'Journal of Software Engineering Research and Development (JSERD), v. 14, n. 1',
      en: 'Journal of Software Engineering Research and Development (JSERD), vol. 14, no. 1',
    },
    year: '2026',
    note: { pt: 'Versão estendida do artigo premiado no SAST', en: 'Extended version of the SAST award-winning paper' },
    links: {
      paper: 'https://journals-sol.sbc.org.br/index.php/jserd/article/view/7565',
      doi: 'https://doi.org/10.5753/jserd.2026.7565',
      data: 'https://doi.org/10.5281/zenodo.20938400',
    },
  },
  {
    id: 'sast-2025',
    title: {
      pt: 'Detecção de Conflitos Semânticos com Testes Gerados por LLM',
      en: 'Semantic Conflict Detection Using LLM-Generated Unit Tests',
    },
    authors: ['Nathalia Barbosa', 'Paulo Borba', 'Léuson Da Silva'],
    venue: {
      pt: 'X Simpósio Brasileiro de Testes de Software Sistemático e Automatizado (SAST), CBSoft',
      en: 'X Brazilian Symposium on Systematic and Automated Software Testing (SAST), CBSoft',
    },
    year: '2025',
    note: { pt: 'Distinguished Paper Award', en: 'Distinguished Paper Award' },
    links: {
      paper: 'https://sol.sbc.org.br/index.php/sast/article/view/36879',
      doi: 'https://doi.org/10.5753/sast.2025.13826',
    },
  },
];

export interface Award {
  id: string;
  title: L;
  detail: L;
}

export const awards: Award[] = [
  {
    id: 'sast',
    title: { pt: 'Distinguished Paper Award', en: 'Distinguished Paper Award' },
    detail: { pt: 'X SAST, CBSoft 2025', en: 'X SAST, CBSoft 2025' },
  },
  {
    id: 'projetao',
    title: { pt: 'Melhor Projeto de Startup', en: 'Best Startup Project' },
    detail: { pt: 'Projetão 2025.1, TáPago (CIn-UFPE)', en: 'Projetão 2025.1, TáPago (CIn-UFPE)' },
  },
  {
    id: 'pibic',
    title: {
      pt: 'Menção Honrosa de Excelência em Pesquisa, Ciências Exatas',
      en: 'Honorable Mention for Excellence in Research, Exact Sciences',
    },
    detail: { pt: 'PIBIC/FACEPE', en: 'PIBIC/FACEPE' },
  },
];
