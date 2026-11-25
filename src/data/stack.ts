import type { L } from './types';

export interface Tech {
  name: string;
  /** Nome no formato do astro-icon: "conjunto:ícone". */
  icon: string;
  /** Só para ícones monocromáticos (simple-icons): cor da marca. */
  color?: string;
}

export interface StackGroup {
  id: string;
  title: L;
  items: Tech[];
}

// Para adicionar uma tecnologia: ache o ícone em https://icon-sets.iconify.design
// (prefira "devicon", que já é colorido), instale o conjunto se for novo e copie o nome.
export const stack: StackGroup[] = [
  {
    id: 'languages',
    title: { pt: 'Linguagens', en: 'Languages' },
    items: [
      { name: 'Python', icon: 'devicon:python' },
      { name: 'TypeScript', icon: 'devicon:typescript' },
      { name: 'Java', icon: 'devicon:java' },
      { name: 'C', icon: 'devicon:c' },
      { name: 'C++', icon: 'devicon:cplusplus' },
    ],
  },
  {
    id: 'ai',
    title: { pt: 'IA e LLMs', en: 'AI & LLMs' },
    items: [
      { name: 'LangGraph', icon: 'simple-icons:langgraph', color: '#1c3c3c' },
      { name: 'LangChain', icon: 'simple-icons:langchain', color: '#1c3c3c' },
      { name: 'OpenAI', icon: 'simple-icons:openai', color: '#412991' },
      { name: 'Ollama', icon: 'devicon:ollama' },
      { name: 'Gemini', icon: 'devicon:gemini' },
      { name: 'OpenRouter', icon: 'simple-icons:openrouter', color: '#6566f1' },
    ],
  },
  {
    id: 'backend',
    title: { pt: 'Backend e dados', en: 'Backend & data' },
    items: [
      { name: 'FastAPI', icon: 'devicon:fastapi' },
      { name: 'Pydantic', icon: 'simple-icons:pydantic', color: '#e92063' },
      { name: 'SQLAlchemy', icon: 'devicon:sqlalchemy' },
      { name: 'PostgreSQL', icon: 'devicon:postgresql' },
      { name: 'Supabase', icon: 'devicon:supabase' },
      { name: 'NestJS', icon: 'devicon:nestjs' },
      { name: 'Prisma', icon: 'devicon:prisma' },
    ],
  },
  {
    id: 'frontend',
    title: { pt: 'Front-end', en: 'Frontend' },
    items: [
      { name: 'React', icon: 'devicon:react' },
      { name: 'Next.js', icon: 'devicon:nextjs' },
    ],
  },
  {
    id: 'devops',
    title: { pt: 'DevOps e qualidade', en: 'DevOps & quality' },
    items: [
      { name: 'Docker', icon: 'devicon:docker' },
      { name: 'Git', icon: 'devicon:git' },
      { name: 'GitHub Actions', icon: 'devicon:githubactions' },
      { name: 'Linux', icon: 'devicon:linux' },
      { name: 'JUnit', icon: 'devicon:junit' },
      { name: 'Ruff', icon: 'simple-icons:ruff', color: '#261230' },
      { name: 'Trivy', icon: 'simple-icons:trivy', color: '#1904da' },
      { name: 'Bandit', icon: 'lucide:shield-check' },
      { name: 'mypy', icon: 'simple-icons:python', color: '#2b5b84' },
    ],
  },
];
