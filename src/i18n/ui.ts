import type { Lang } from '../data/types';

export const languages: Lang[] = ['pt', 'en'];
export const defaultLang: Lang = 'en';

export const ui = {
  pt: {
    htmlLang: 'pt-BR',
    skip: 'Pular para o conteúdo',
    nav: { about: 'Sobre', stack: 'Stack', projects: 'Projetos', papers: 'Publicações', events: 'Eventos', contact: 'Contato', blog: 'Blog' },
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    toggleTheme: 'Alternar tema claro/escuro',
    cta: { projects: 'Ver projetos', contact: 'Falar comigo' },
    sections: {
      about: 'Sobre',
      stack: 'Stack',
      projects: 'Projetos',
      papers: 'Publicações',
      awards: 'Reconhecimentos',
      events: 'Eventos',
      blog: 'Blog',
      contact: 'Contato',
    },
    contactText: 'Quer conversar sobre IA aplicada, backend ou pesquisa? É só me chamar.',
    code: 'Código',
    moreProjects: 'Ver mais no GitHub',
    demo: 'Demo',
    paper: 'Artigo',
    paperDoi: 'DOI',
    paperData: 'Dados',
    projectCover: 'Capa do projeto',
    eventTypes: { talk: 'Apresentação', hackathon: 'Hackathon', award: 'Prêmio', conference: 'Conferência' },
    blog: { title: 'Blog', empty: 'Ainda não há posts por aqui.', back: 'Voltar ao blog', allPosts: 'Todos os posts' },
    notFound: { title: 'Página não encontrada', text: 'Esse endereço não existe (ou mudou de lugar).', home: 'Voltar para a página inicial' },
    footer: 'Feito com Astro',
    social: { email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn', cin: 'Página no CIn-UFPE', lattes: 'Currículo Lattes', orcid: 'ORCID' },
  },
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    nav: { about: 'About', stack: 'Stack', projects: 'Projects', papers: 'Publications', events: 'Events', contact: 'Contact', blog: 'Blog' },
    switchLang: 'Português',
    switchLangLabel: 'Mudar para português',
    toggleTheme: 'Toggle light/dark theme',
    cta: { projects: 'See projects', contact: 'Get in touch' },
    sections: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      papers: 'Publications',
      awards: 'Awards',
      events: 'Events',
      blog: 'Blog',
      contact: 'Contact',
    },
    contactText: 'Want to talk about applied AI, backend or research? Just reach out.',
    code: 'Code',
    moreProjects: 'See more on GitHub',
    demo: 'Demo',
    paper: 'Paper',
    paperDoi: 'DOI',
    paperData: 'Data',
    projectCover: 'Project cover',
    eventTypes: { talk: 'Talk', hackathon: 'Hackathon', award: 'Award', conference: 'Conference' },
    blog: { title: 'Blog', empty: 'No posts here yet.', back: 'Back to blog', allPosts: 'All posts' },
    notFound: { title: 'Page not found', text: "This address doesn't exist (or it moved).", home: 'Back to home' },
    footer: 'Built with Astro',
    social: { email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn', cin: 'CIn-UFPE page', lattes: 'Lattes CV', orcid: 'ORCID' },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

const months = {
  pt: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
} as const;

/** "2025-11" -> "nov. 2025" / "Nov 2025" */
export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-');
  return `${months[lang][Number(m) - 1]} ${y}`;
}

/** Caminho de uma seção/página respeitando o idioma. */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/pt${clean === '/' ? '/' : clean}`;
}
