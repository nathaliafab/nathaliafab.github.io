import type { ImageMetadata } from 'astro';
import type { L } from './types';

import peneiria from '../assets/projects/peneiria.png';
import agenterevisa from '../assets/projects/agenterevisa.png';
import wordlex86 from '../assets/projects/wordlex86.png';
import fantasylab from '../assets/projects/fantasylab.png';
import letterboxcin from '../assets/projects/letterboxcin.png';

export interface Project {
  id: string;
  name: string;
  year: string;
  /** Imagem de capa (1200×627) em src/assets/projects/ */
  image: ImageMetadata;
  description: L;
  tags: string[];
  /** Contexto (hackathon, disciplina...) */
  context?: L;
  links: { repo: string; demo?: string };
  /** Legendas das fotos extras em src/assets/projects/<id>/, pelo nome do arquivo sem o número e a extensão. */
  captions?: Record<string, L>;
}

// Para adicionar um projeto: coloque a capa em src/assets/projects/, importe acima e copie um item abaixo.
export const projects: Project[] = [
  {
    id: 'peneiria',
    name: 'peneir.IA',
    year: '2026',
    image: peneiria,
    description: {
      pt: 'Radar de licitações públicas para pequenas empresas. Encontra editais do PNCP que combinam com o perfil da empresa por busca semântica, lê o edital com IA e confere os documentos da empresa contra as exigências.',
      en: "Public tender radar for small businesses. Matches PNCP (Brazil's public procurement portal) notices to a company's profile with semantic search, reads each notice with AI and checks the company's documents against the requirements.",
    },
    context: {
      pt: 'Hackathon Converge Challenge, equipe de 4 pessoas',
      en: 'Converge Challenge hackathon, team of 4',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'LangChain', 'OpenAI'],
    captions: {
      'pagina-inicial': { pt: 'Página inicial', en: 'Home page' },
      'perguntas-frequentes': { pt: 'Perguntas frequentes', en: 'FAQ' },
      'painel-visao-geral': { pt: 'Painel: visão geral', en: 'Dashboard overview' },
      'lista-de-oportunidades': { pt: 'Lista de oportunidades', en: 'Opportunities list' },
      'detalhe-da-oportunidade': { pt: 'Detalhe da oportunidade', en: 'Opportunity details' },
      'leitura-do-edital': { pt: 'Leitura do edital', en: 'Notice reading' },
      'documentos-exigidos': { pt: 'Documentos exigidos', en: 'Required documents' },
      'perfil-da-empresa': { pt: 'Perfil da empresa', en: 'Company profile' },
    },
    links: { repo: 'https://github.com/ligiaferro/peneir.IA' },
  },
  {
    id: 'agenterevisa',
    name: 'AgenteRevisa',
    year: '2026',
    image: agenterevisa,
    description: {
      pt: 'Ferramenta de revisão e refatoração de código Java com IA. Um pipeline multiagente em LangGraph (Gemini) gera testes JUnit 5 e depois corrige iterativamente os alertas do SpotBugs, PMD e Checkstyle, aceitando só as mudanças que mantêm os testes passando. Roda em Docker.',
      en: 'AI-powered Java code review and refactoring tool. A LangGraph multi-agent pipeline (Gemini) generates JUnit 5 tests, then iteratively fixes SpotBugs, PMD and Checkstyle findings, accepting only changes that keep the tests passing. Runs in Docker.',
    },
    tags: ['Python', 'LangGraph', 'Docker', 'JUnit'],
    links: { repo: 'https://github.com/nathaliafab/AgenteRevisa' },
  },
  {
    id: 'wordlex86',
    name: 'WordleX86',
    year: '2023',
    image: wordlex86,
    description: {
      pt: 'Clone de Wordle escrito do zero em assembly x86 (NASM) e executado no QEMU. Feito sozinha, sem ajuda de IA e só por diversão: usa interrupções da BIOS, gráficos VGA e sorteia a palavra com o contador de tempo da CPU. Programar em baixo nível reforçou meu controle de fluxo e minha lógica de programação.',
      en: 'Wordle clone written from scratch in x86 assembly (NASM) and run on QEMU. Built solo, without AI help and just for fun: it uses BIOS interrupts, VGA graphics and picks the word with the CPU timestamp counter. Low-level programming sharpened my control flow and programming logic.',
    },
    tags: ['Assembly', 'NASM', 'QEMU', 'Docker'],
    captions: {
      'menu-inicial': { pt: 'Menu inicial', en: 'Title menu' },
      'tentativa': { pt: 'Tentativa', en: 'Guess attempt' },
      'vitoria': { pt: 'Vitória', en: 'Win screen' },
      'derrota': { pt: 'Derrota', en: 'Lose screen' },
    },
    links: { repo: 'https://github.com/nathaliafab/WordleX86' },
  },
  {
    id: 'fantasylab',
    name: 'FantasyLab',
    year: '2023',
    image: fantasylab,
    description: {
      pt: 'Aplicação web em React que ajuda mestres de RPG a gerar personagens, histórias e ambientação com as APIs GPT-3.5 e DALL-E da OpenAI.',
      en: "Web app built with React that helps RPG game masters generate characters, stories and ambiance using OpenAI's GPT-3.5 and DALL-E APIs.",
    },
    context: {
      pt: 'Hackathon Treasure Hacks 3.5, equipe de 3 pessoas',
      en: 'Treasure Hacks 3.5 hackathon, team of 3',
    },
    tags: ['React', 'OpenAI API', 'Prompt engineering'],
    captions: {
      'pagina-inicial': { pt: 'Página inicial', en: 'Home page' },
      'gerador-de-personagem': { pt: 'Gerador de personagem', en: 'Character generator' },
      'personagem-elfo': { pt: 'Personagem gerado: elfo bardo', en: 'Generated character: elf bard' },
      'personagem-medica': { pt: 'Personagem gerado: médica', en: 'Generated character: doctor' },
      'gerador-de-historia': { pt: 'Gerador de história', en: 'Story generator' },
      'historia-cyberpunk': { pt: 'História gerada: cyberpunk', en: 'Generated story: cyberpunk' },
    },
    links: {
      repo: 'https://github.com/nathaliafab/FantasyLab',
      demo: 'https://fantasylab.netlify.app/',
    },
  },
  {
    id: 'letterboxcin',
    name: 'LetterboxCIn',
    year: '2022',
    image: letterboxcin,
    description: {
      pt: 'Aplicação web full-stack inspirada no Letterboxd, onde usuários descobrem filmes e dão notas. Busca dados de filmes em tempo real na API REST do TMDB. Feita com React.js e TypeScript no front-end e Prisma ORM para modelagem de dados e acesso tipado ao banco.',
      en: 'Full-stack web app inspired by Letterboxd, where users discover movies and rate them. Fetches real-time movie data from the TMDB REST API. Built with React.js and TypeScript on the frontend and Prisma ORM for data modeling and type-safe database access.',
    },
    context: {
      pt: 'Disciplina de Engenharia de Software e Sistemas, CIn-UFPE',
      en: 'Software and Systems Engineering course, CIn-UFPE',
    },
    tags: ['React', 'TypeScript', 'Prisma', 'TMDB API'],
    links: { repo: 'https://github.com/SarahLMelo/ess-review-share' },
  },
];
