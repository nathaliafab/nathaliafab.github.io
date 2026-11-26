import type { ImageMetadata } from 'astro';
import type { L, Lang } from './types';

import peneiria from '../assets/projects/peneiria.png';
import agenterevisa from '../assets/projects/agenterevisa.png';
import wordlex86 from '../assets/projects/wordlex86.png';
import fantasylab from '../assets/projects/fantasylab.png';
import letterboxcin from '../assets/projects/letterboxcin.png';
import controlegastos from '../assets/projects/controlegastos.png';
import sastarticle from '../assets/projects/sast-article-latex.png';
import pysmat from '../assets/projects/pysmat.png';
import proftest from '../assets/projects/proftest.png';
import vfoods from '../assets/projects/vfoods.png';
import chatudp from '../assets/projects/chatudp.png';
import agentsearch from '../assets/projects/agentsearch.png';
import embuscadofree from '../assets/projects/embuscadofree.png';
import mlp from '../assets/projects/mlp.png';
import covid19 from '../assets/projects/covid19.png';
import bayesdiabetes from '../assets/projects/bayesdiabetes.png';

export interface Project {
  id: string;
  /** Nome fixo, ou um por idioma */
  name: string | L;
  year: string;
  /** Imagem de capa (1200×627) em src/assets/projects/ */
  image: ImageMetadata;
  description: L;
  tags: string[];
  /** Contexto (hackathon, disciplina...) */
  context?: L;
  links: { repo: string; demo?: string; /** Segundo repositório, quando o projeto tem dois */ repo2?: { label: string; url: string } };
  /** Legendas das fotos extras em src/assets/projects/<id>/, pelo nome do arquivo sem o número e a extensão. */
  captions?: Record<string, L>;
}

export const projectName = (p: Project, lang: Lang) => (typeof p.name === 'string' ? p.name : p.name[lang]);

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
      pt: 'Hackathon Converge Challenge',
      en: 'Converge Challenge hackathon',
    },
    tags: ['Next.js', 'TypeScript', 'Supabase', 'LangChain', 'OpenAI', 'AI', 'Web'],
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
    context: {
      pt: 'Disciplina de Tópicos Avançados em Linguagens de Programação (IN1045), mestrado no CIn-UFPE',
      en: 'Advanced Topics in Programming Languages course (IN1045), MSc at CIn-UFPE',
    },
    tags: ['Python', 'LangGraph', 'Docker', 'JUnit', 'AI', 'Testing'],
    links: { repo: 'https://github.com/nathaliafab/AgenteRevisa' },
  },
  {
    id: 'proftest',
    name: 'ProfTest',
    year: '2026',
    image: proftest,
    description: {
      pt: 'Dois sistemas web para o dia a dia de professores. O ProfTest mantém um banco de questões de múltipla escolha, gera provas em PDF e corrige as respostas dos alunos a partir de CSVs. O ProfTest 2 gerencia alunos, turmas e avaliações por meta (MANA, MPA e MA), com filtros e ordenação, e envia por e-mail um resumo diário das notas alteradas. Ambos rodam em Docker e têm testes de aceitação em Cucumber.',
      en: "Two web systems for a professor's day-to-day. ProfTest keeps a multiple-choice question bank, generates PDF tests and grades student answers from CSV files. ProfTest 2 manages students, classes and goal-based evaluations (MANA, MPA and MA), with filters and sorting, and emails a daily summary of changed grades. Both run in Docker and have Cucumber acceptance tests.",
    },
    context: {
      pt: 'Disciplina de Tópicos Avançados em Linguagens de Programação (IN1045), mestrado no CIn-UFPE',
      en: 'Advanced Topics in Programming Languages course (IN1045), MSc at CIn-UFPE',
    },
    tags: ['TypeScript', 'React', 'Node.js', 'Next.js', 'Cucumber', 'Docker', 'Testing', 'Web'],
    captions: {
      'cadastro-de-aluno': { pt: 'ProfTest 2: cadastro de aluno', en: 'ProfTest 2: student registration' },
      'validacao-do-formulario': { pt: 'ProfTest 2: validação do formulário', en: 'ProfTest 2: form validation' },
      'avaliacoes': { pt: 'ProfTest 2: avaliações por meta', en: 'ProfTest 2: goal-based evaluations' },
      'turmas': { pt: 'ProfTest 2: turmas e conceitos', en: 'ProfTest 2: classes and grades' },
      'avaliacao-por-turma': { pt: 'ProfTest 2: avaliação com turma', en: 'ProfTest 2: evaluation with class' },
      'resumo-por-email': { pt: 'ProfTest 2: resumo diário por e-mail', en: 'ProfTest 2: daily email summary' },
    },
    links: {
      repo: 'https://github.com/nathaliafab/proftest',
      repo2: { label: 'ProfTest 2', url: 'https://github.com/nathaliafab/proftest2' },
    },
  },
  {
    id: 'controle-gastos',
    name: { pt: 'controle-gastos', en: 'Expense Tracker' },
    year: '2025',
    image: controlegastos,
    description: {
      pt: 'Sistema que unifica extratos de vários bancos (C6, Bradesco, Banco do Brasil e Itaú, inclusive cartões) em uma única tabela. Categoriza as transações, identifica transferências próprias entre contas, gera gráficos Sankey interativos e exporta para Excel, pelo terminal ou por uma interface web em Django.',
      en: "System that merges statements from several banks (C6, Bradesco, Banco do Brasil and Itaú, credit cards included) into a single table. It categorizes transactions, detects transfers between own accounts, generates interactive Sankey charts and exports to Excel, through the terminal or a Django web interface.",
    },
    context: {
      pt: 'Projeto pessoal',
      en: 'Personal project',
    },
    tags: ['Python', 'Django', 'pandas', 'Plotly', 'Data Science', 'Web'],
    links: { repo: 'https://github.com/nathaliafab/controle-gastos' },
  },
  {
    id: 'sast-article-latex',
    name: 'sast-article-latex',
    year: '2025',
    image: sastarticle,
    description: {
      pt: 'O artigo tratado como código: ambiente em Docker, Makefile com build, modo watch e corretor ortográfico PT-BR/EN-US, e GitHub Actions que compila o PDF a cada push, publica uma release com o PDF anexado ao criar uma tag e monta o changelog a partir das pull requests organizadas por labels.',
      en: "The paper treated like code: Docker environment, a Makefile with build, watch mode and PT-BR/EN-US spell checking, and GitHub Actions that compile the PDF on every push, publish a release with the PDF attached when a tag is created and build the changelog from pull requests organized by labels.",
    },
    context: {
      pt: 'Fonte em LaTeX do artigo publicado no SAST 2025',
      en: 'LaTeX source of the paper published at SAST 2025',
    },
    tags: ['LaTeX', 'Docker', 'GitHub Actions', 'Make', 'CI/CD'],
    links: { repo: 'https://github.com/nathaliafab/sast-article-latex', demo: 'https://sol.sbc.org.br/index.php/sast/article/view/36879' },
  },
  {
    id: 'pysmat',
    name: 'PySMAT',
    year: '2025',
    image: pysmat,
    description: {
      pt: 'Ferramenta que identifica conflitos semânticos em cenários de merge de projetos Python. Recebe as versões base, left, right e merge de um arquivo, gera testes automaticamente com IA (Gemini) ou Pynguin e os executa nas quatro versões para detectar o conflito. Roda em Docker Compose.',
      en: "Tool that identifies semantic conflicts in merge scenarios of Python projects. It takes the base, left, right and merge versions of a file, generates tests automatically with AI (Gemini) or Pynguin and runs them on all four versions to detect the conflict. Runs with Docker Compose.",
    },
    context: {
      pt: 'Disciplinas de Tópicos Avançados em Engenharia de Software, mestrado no CIn-UFPE',
      en: 'Advanced Topics in Software Engineering courses, MSc at CIn-UFPE',
    },
    tags: ['Python', 'Gemini', 'Pynguin', 'Docker', 'AI', 'Testing'],
    links: { repo: 'https://github.com/nathaliafab/PySMAT' },
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
    context: {
      pt: 'Projeto pessoal',
      en: 'Personal project',
    },
    tags: ['Assembly', 'NASM', 'QEMU', 'Docker', 'Game Dev'],
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
      pt: 'Hackathon Treasure Hacks 3.5',
      en: 'Treasure Hacks 3.5 hackathon',
    },
    tags: ['React', 'OpenAI', 'Prompt Engineering', 'AI', 'Web'],
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
    id: 'vfoods',
    name: 'V-FOODS',
    year: '2023',
    image: vfoods,
    description: {
      pt: 'Aplicação web para gerenciar indicadores e metas dos colaboradores de uma empresa do varejo alimentício. Cada indicador tem meta, supermeta e desafio, e os resultados mensais viram gráficos e notas por colaborador, com busca rápida e perfis.',
      en: "Web app to manage the indicators and goals of the employees of a food retail company. Each indicator has a target, a stretch target and a challenge, and monthly results become charts and per-employee scores, with quick search and profiles.",
    },
    context: {
      pt: 'Desafio Dev/UX do Rocket Lab',
      en: 'Rocket Lab Dev/UX challenge',
    },
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Web'],
    captions: {
      'login': { pt: 'Login', en: 'Login' },
      'home': { pt: 'Página inicial', en: 'Home page' },
      'indicadores': { pt: 'Lista de indicadores', en: 'Indicators list' },
      'indicador': { pt: 'Detalhe do indicador', en: 'Indicator details' },
      'criacao-indicador-1': { pt: 'Criação de indicador: passo 1', en: 'Indicator creation: step 1' },
      'criacao-indicador-2': { pt: 'Criação de indicador: passo 2', en: 'Indicator creation: step 2' },
      'criacao-indicador-3': { pt: 'Criação de indicador: passo 3', en: 'Indicator creation: step 3' },
      'colaboradores': { pt: 'Lista de colaboradores', en: 'Employees list' },
      'colaborador': { pt: 'Perfil do colaborador', en: 'Employee profile' },
      'cadastro-colaborador': { pt: 'Cadastro de colaborador', en: 'Employee registration' },
      'gestor': { pt: 'Perfil do gestor', en: 'Manager profile' },
      'barra-de-pesquisa': { pt: 'Barra de pesquisa', en: 'Search bar' },
    },
    links: { repo: 'https://github.com/artursanntos/vfoods' },
  },
  {
    id: 'mlp',
    name: { pt: 'MLP: Dor Lombar', en: 'MLP: Lower Back Pain' },
    year: '2023',
    image: mlp,
    description: {
      pt: 'Treino e comparação de cinco redes neurais Multilayer Perceptron para classificar a coluna de pacientes como normal ou anormal, a partir de 12 medidas biomecânicas. Inclui limpeza de outliers pela regra do 1,5 IQR, balanceamento com SMOTE e uma análise de overfitting variando camadas, neurônios, otimizador e taxa de aprendizado.',
      en: "Training and comparison of five Multilayer Perceptron neural networks to classify patients' spines as normal or abnormal from 12 biomechanical measurements. Includes outlier cleaning with the 1.5 IQR rule, class balancing with SMOTE and an overfitting analysis varying layers, neurons, optimizer and learning rate.",
    },
    context: {
      pt: 'Disciplina de Sistemas Inteligentes (IF684), CIn-UFPE',
      en: 'Intelligent Systems course (IF684), CIn-UFPE',
    },
    tags: ['Python', 'scikit-learn', 'SMOTE', 'Deep Learning', 'Machine Learning', 'Data Science', 'AI'],
    captions: {
      'outliers': { pt: 'Boxplots dos atributos', en: 'Attribute boxplots' },
      'distribuicao-dos-atributos': { pt: 'Distribuição dos atributos por classe', en: 'Attribute distribution per class' },
      'mlp-1': { pt: 'MLP 1: matriz de confusão', en: 'MLP 1: confusion matrix' },
      'mlp-3': { pt: 'MLP 3: matriz de confusão', en: 'MLP 3: confusion matrix' },
      'comparacao': { pt: 'Acurácia de treino e teste dos 5 MLPs', en: 'Training and test accuracy of the 5 MLPs' },
    },
    links: { repo: 'https://github.com/fernandesbarreto/MLP' },
  },
  {
    id: 'bayes-diabetes',
    name: { pt: 'Diabetes com Naive Bayes', en: 'Diabetes with Naive Bayes' },
    year: '2023',
    image: bayesdiabetes,
    description: {
      pt: 'Previsão de diabetes com o classificador Gaussian Naive Bayes sobre 100 mil pacientes (idade, IMC, HbA1c, glicose e histórico clínico). Faz análise descritiva e inferencial, compara os resultados com e sem outliers e usa SMOTE para reduzir os falsos negativos da classe minoritária. Acurácia de cerca de 90% no modelo base.',
      en: "Diabetes prediction with a Gaussian Naive Bayes classifier on 100k patients (age, BMI, HbA1c, glucose and clinical history). Covers descriptive and inferential analysis, compares results with and without outliers and uses SMOTE to cut false negatives on the minority class. Around 90% accuracy on the base model.",
    },
    context: {
      pt: 'Disciplina de Estatística e Probabilidade para Computação (ET586), CIn-UFPE',
      en: 'Statistics and Probability for Computing course (ET586), CIn-UFPE',
    },
    tags: ['Python', 'scikit-learn', 'Seaborn', 'SMOTE', 'Machine Learning', 'Data Science'],
    captions: {
      'distribuicoes': { pt: 'Distribuição de IMC, glicose e HbA1c', en: 'BMI, glucose and HbA1c distributions' },
      'outliers': { pt: 'Boxplots e outliers', en: 'Boxplots and outliers' },
      'matriz-de-confusao': { pt: 'Matriz de confusão', en: 'Confusion matrix' },
      'matriz-com-smote': { pt: 'Matriz de confusão com SMOTE', en: 'Confusion matrix with SMOTE' },
    },
    links: { repo: 'https://github.com/SarahLMelo/AirplaneAnalysis' },
  },
  {
    id: 'chatudp',
    name: 'ChatUDP',
    year: '2023',
    image: chatudp,
    description: {
      pt: 'Chat de sala única construído em três etapas sobre sockets UDP em Python: envio de arquivos fragmentados em pacotes, transferência confiável com RDT 3.0 (com perda simulada de pacotes) e um chat cliente-servidor com comandos como lista de amigos e banimento por votação.',
      en: "Single-room chat built in three stages on top of Python UDP sockets: file transfer fragmented into packets, reliable data transfer with RDT 3.0 (with simulated packet loss) and a client-server chat with commands such as friends list and ban by vote.",
    },
    context: {
      pt: 'Disciplina de Infraestrutura de Comunicações (IF678), CIn-UFPE',
      en: 'Communications Infrastructure course (IF678), CIn-UFPE',
    },
    tags: ['Python', 'Sockets', 'UDP', 'RDT 3.0', 'Networking'],
    links: { repo: 'https://github.com/nathaliafab/ChatUDP' },
  },
  {
    id: 'agentsearch',
    name: 'agentSearch',
    year: '2023',
    image: agentsearch,
    description: {
      pt: 'Visualização interativa de estratégias de busca (largura, profundidade, custo uniforme, gulosa e A*) em um ambiente discreto gerado aleatoriamente, com terrenos de custos diferentes. Fiquei responsável pelos algoritmos de busca.',
      en: "Interactive visualization of search strategies (breadth-first, depth-first, uniform cost, greedy and A*) in a randomly generated discrete environment with terrains of different costs. I was in charge of the search algorithms.",
    },
    context: {
      pt: 'Disciplina de Sistemas Inteligentes (IF684), CIn-UFPE',
      en: 'Intelligent Systems course (IF684), CIn-UFPE',
    },
    tags: ['JavaScript', 'p5.js', 'A*', 'AI Search', 'AI'],
    links: { repo: 'https://github.com/mrcndz/agentSearch', demo: 'https://editor.p5js.org/jmbj2/full/d_ORuluub' },
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
    tags: ['React', 'TypeScript', 'Prisma', 'TMDB API', 'Web'],
    links: { repo: 'https://github.com/SarahLMelo/ess-review-share' },
  },
  {
    id: 'covid19',
    name: { pt: 'Análise de Vacinas da Covid-19', en: 'Covid-19 Vaccine Analysis' },
    year: '2022',
    image: covid19,
    description: {
      pt: 'Análise do impacto das vacinas na pandemia de Covid-19 em Pernambuco. Usa o modelo epidemiológico SVIRS, resolvido como sistema de EDOs com SciPy e calibrado com dados reais de casos e vacinação, para projetar até 2023 o cenário real e o cenário hipotético sem vacinas.',
      en: "Analysis of the impact of vaccines on the Covid-19 pandemic in Pernambuco, Brazil. Uses the SVIRS epidemiological model, solved as a system of ODEs with SciPy and calibrated with real case and vaccination data, to project through 2023 both the real scenario and a hypothetical one without vaccines.",
    },
    context: {
      pt: 'Disciplina de Métodos Numéricos Computacionais (IF816), CIn-UFPE',
      en: 'Computational Numerical Methods course (IF816), CIn-UFPE',
    },
    tags: ['Python', 'SciPy', 'pandas', 'Matplotlib', 'ODEs', 'Data Science'],
    captions: {
      'mapa-mental': { pt: 'Mapa mental do modelo SVIRS', en: 'SVIRS model mind map' },
      'casos-reais': { pt: 'Casos reais acumulados em PE', en: 'Real accumulated cases in PE' },
      'vacinacao': { pt: 'Vacinas aplicadas em PE', en: 'Vaccines applied in PE' },
      'modelo-com-vacina': { pt: 'Modelo com vacina vs. realidade', en: 'Model with vaccine vs. reality' },
      'modelo-sem-vacina': { pt: 'Modelo sem vacina vs. realidade', en: 'Model without vaccine vs. reality' },
    },
    links: { repo: 'https://github.com/SarahLMelo/Covid19VaccineAnalysis' },
  },
  {
    id: 'embuscadofree',
    name: 'Em Busca do Free',
    year: '2020',
    image: embuscadofree,
    description: {
      pt: 'Jogo de plataforma inspirado no Chrome Dino, em C com a biblioteca raylib. O jogador desvia de inimigos na Floresta da Decisão e depois enfrenta o chefe ACMáquina e seu exército de assemblies, cheio de referências à vida no CIn.',
      en: "Platformer game inspired by Chrome Dino, written in C with the raylib library. The player dodges enemies in the Forest of Decision and then fights the boss ACMáquina and its army of assemblies, full of references to life at CIn.",
    },
    context: {
      pt: 'Disciplina de Introdução à Programação (IF669), CIn-UFPE, equipe de 5 pessoas',
      en: 'Intro to Programming course (IF669), CIn-UFPE, team of 5',
    },
    tags: ['C', 'raylib', 'Game Dev'],
    captions: {
      'inicio': { pt: 'Tela inicial', en: 'Title screen' },
      'fase-um': { pt: 'Primeira fase', en: 'First level' },
      'game-over': { pt: 'Game over', en: 'Game over' },
    },
    links: { repo: 'https://github.com/nathaliafab/Em-Busca-do-Free' },
  },
];
