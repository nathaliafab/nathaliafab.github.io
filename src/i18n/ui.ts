import type { Lang } from '../data/types';

export const languages: Lang[] = ['pt', 'en'];
const defaultLang: Lang = 'en';

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
    demo: 'Demo',
    paper: 'Artigo',
    paperDoi: 'DOI',
    paperData: 'Dados',
    projectCover: 'Capa do projeto',
    prev: 'Imagem anterior',
    next: 'Próxima imagem',
    close: 'Fechar',
    railPrev: 'Projetos anteriores',
    railNext: 'Próximos projetos',
    searchProjects: 'Buscar projeto',
    filterTag: 'Filtrar por tag',
    allTags: 'Todas as tags',
    noProjects: 'Nenhum projeto encontrado.',
    contactModal: {
      title: 'Enviar e-mail',
      to: 'Para',
      name: 'Seu nome',
      email: 'Seu e-mail (para eu responder)',
      subject: 'Assunto',
      defaultSubject: 'Contato pelo site',
      message: 'Mensagem',
      needMessage: 'Escreva uma mensagem primeiro.',
      draftHint: 'Abra um rascunho já preenchido:',
      gmail: 'Gmail',
      mail: 'App de e-mail',
      copy: 'Copiar texto',
      copied: 'Copiado!',
    },
    months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    activity: {
      title: 'Atividade no GitHub',
      summary: (total: string, streak: number) => `${total} contribuições nos últimos 12 meses · sequência atual de ${streak} ${streak === 1 ? 'dia' : 'dias'}`,
      day: (n: number, date: string) => `${n} ${n === 1 ? 'contribuição' : 'contribuições'} em ${date.split('-').reverse().join('/')}`,
      less: 'Menos',
      more: 'Mais',
    },
    eventTypes: { talk: 'Apresentação', hackathon: 'Hackathon', award: 'Prêmio', conference: 'Conferência' },
    blog: { title: 'Blog', empty: 'Ainda não há posts por aqui.', back: 'Voltar ao blog', allPosts: 'Todos os posts' },
    notFound: { title: 'Página não encontrada', text: 'Esse endereço não existe (ou mudou de lugar).', home: 'Voltar para a página inicial' },
    footer: 'Feito com Astro',
    pokemonNote: 'Pokémon é marca registrada da Nintendo.',
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
    demo: 'Demo',
    paper: 'Paper',
    paperDoi: 'DOI',
    paperData: 'Data',
    projectCover: 'Project cover',
    prev: 'Previous image',
    next: 'Next image',
    close: 'Close',
    railPrev: 'Previous projects',
    railNext: 'Next projects',
    searchProjects: 'Search projects',
    filterTag: 'Filter by tag',
    allTags: 'All tags',
    noProjects: 'No projects found.',
    contactModal: {
      title: 'Send an e-mail',
      to: 'To',
      name: 'Your name',
      email: 'Your e-mail (so I can reply)',
      subject: 'Subject',
      defaultSubject: 'Message from your website',
      message: 'Message',
      needMessage: 'Write a message first.',
      draftHint: 'Open a pre-filled draft:',
      gmail: 'Gmail',
      mail: 'E-mail app',
      copy: 'Copy text',
      copied: 'Copied!',
    },
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    activity: {
      title: 'GitHub activity',
      summary: (total: string, streak: number) => `${total} contributions in the last 12 months · current streak of ${streak} ${streak === 1 ? 'day' : 'days'}`,
      day: (n: number, date: string) => `${n} ${n === 1 ? 'contribution' : 'contributions'} on ${date}`,
      less: 'Less',
      more: 'More',
    },
    eventTypes: { talk: 'Talk', hackathon: 'Hackathon', award: 'Award', conference: 'Conference' },
    blog: { title: 'Blog', empty: 'No posts here yet.', back: 'Back to blog', allPosts: 'All posts' },
    notFound: { title: 'Page not found', text: "This address doesn't exist (or it moved).", home: 'Back to home' },
    footer: 'Built with Astro',
    pokemonNote: 'Pokémon is a trademark of Nintendo.',
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
