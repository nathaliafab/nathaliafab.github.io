import type { L } from './types';

export const profile = {
  name: 'Nathalia Barbosa',
  email: 'nathaliaferdab@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/74332487?v=4',
  location: {
    pt: 'Recife, Pernambuco, Brasil',
    en: 'Recife, Pernambuco, Brazil',
  } satisfies L,
  role: {
    pt: 'Engenheira de Software Backend',
    en: 'Backend Software Engineer',
  } satisfies L,
  tagline: {
    pt: 'Mestranda em Ciência da Computação no CIn-UFPE · Python e LLMs',
    en: 'MSc student in Computer Science at CIn-UFPE · Python & LLMs',
  } satisfies L,
  description: {
    pt: 'Engenheira de Software Backend e mestranda em Ciência da Computação (CIn-UFPE). Python, FastAPI, LLMs e agentes de IA, e pesquisa em IA aplicada à Engenharia de Software.',
    en: 'Backend Software Engineer and MSc student in Computer Science (CIn-UFPE). Python, FastAPI, LLMs and AI agents, plus research in AI for Software Engineering.',
  } satisfies L,
  about: {
    pt: [
      'Sou mestranda em Ciência da Computação e trabalho com backend e IA. No dia a dia, escrevo código em Python, subo tudo com Docker e brinco (bastante) com LLMs e agentes. 🎀',
      'Na minha pesquisa, uso LLMs para gerar testes automaticamente. A ideia é fazer o dev gastar menos tempo procurando bug e mais tempo pra construir coisa nova (que é o que importa).',
      'Gosto de open source, de trabalhar em equipe e de conversar com quem curte tecnologia.',
      'Quando saio do computador, geralmente estou jogando Pokémon, mexendo em console da Nintendo (homebrew é sempre uma boa desculpa) ou lendo alguma coisa.',
    ],
    en: [
      "I'm a Computer Science master's student working with backend and AI. Day to day, I write Python, ship everything with Docker and play around (a lot) with LLMs and agents. 🎀",
      'In my research, I use LLMs to generate tests automatically. The idea is to help devs spend less time hunting bugs and more time building new things (which is what really matters).',
      'I like open source, working in a team and chatting with people who love tech.',
      "When I'm away from the computer, I'm usually playing Pokémon, tinkering with a Nintendo console (homebrew is always a good excuse) or reading something.",
    ],
  } satisfies L<string[]>,
  links: {
    github: 'https://github.com/nathaliafab',
    linkedin: 'https://www.linkedin.com/in/nathaliafab',
    lattes: 'https://lattes.cnpq.br/3030996284029085',
    orcid: 'https://orcid.org/0009-0008-9604-8901',
    cin: 'https://www.cin.ufpe.br/~nfab/',
  },
};
