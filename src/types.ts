// Tipos do conteúdo da interface. Um futuro `en.ts` segue o mesmo tipo.
// Por enquanto só existem os campos do layout base, do hero, do Sobre mim, das Habilidades, dos
// Projetos, da Formação e do Contato, além das metatags.

export interface NavItem {
  label: string;
  href: string;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroContent {
  label: string;
  title: string;
  lead: string;
  availability: string;
  photo: Image;
  primaryCta: NavItem;
}

// O primeiro parágrafo é a abertura da seção (estilo Lead).
export interface AboutContent {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
}

// As tecnologias já vêm em texto corrido, com a pontuação, para o componente não escrever nada.
export interface SkillGroup {
  category: string;
  technologies: string;
}

export interface SkillsContent {
  number: string;
  label: string;
  title: string;
  groups: SkillGroup[];
}

// Rótulos da seção Projetos. Os textos de cada projeto ficam em `src/data/projects.ts`.
export interface ProjectsContent {
  number: string;
  label: string;
  title: string;
  featuredLabel: string;
  backendLabel: string;
  frontendLabel: string;
  // Usado quando o projeto só tem tags de back-end (sem front-end), como o Estoque.
  technologiesLabel: string;
  deployLabel: string;
  swaggerLabel: string;
}

// Listas vazias e links sem valor não geram elemento na tela.
export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  authorship?: string;
  tags: {
    backend: string[];
    frontend: string[];
  };
  images: Image[];
  links: {
    deploy?: string;
    repositories: NavItem[];
    swagger?: string;
  };
}

// `details` junta instituição e situação ("Estácio · Em andamento ...").
export interface EducationItem {
  period: string;
  course: string;
  details: string;
}

// Link de validação opcional: sem valor, não gera elemento.
export interface Certification {
  name: string;
  issuer: string;
  year: string;
  href?: string;
}

// Lista de certificações vazia esconde a subseção inteira.
export interface EducationContent {
  number: string;
  label: string;
  title: string;
  items: EducationItem[];
  certifications: {
    title: string;
    validateLabel: string;
    items: Certification[];
  };
}

// `value` é o endereço legível mostrado na tela; `external` abre em nova aba.
export interface ContactItem {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export interface ContactContent {
  number: string;
  label: string;
  title: string;
  intro: string;
  items: ContactItem[];
}

// Metatags do <head> (SEO, Open Graph e Twitter Card). Escritas no index.html pelo plugin
// do vite.config.ts, para os robôs de prévia, que não rodam JavaScript.
export interface MetaContent {
  siteUrl: string;
  title: string;
  description: string;
  locale: string;
  siteName: string;
  ogImage: Image;
}

// Usado no Início e no Contato. O tamanho do arquivo faz parte do rótulo.
export interface ResumeLink {
  href: string;
  label: string;
}

export interface Content {
  meta: MetaContent;
  a11y: {
    skipToContent: string;
    opensInNewTab: string;
  };
  header: {
    name: string;
    homeHref: string;
    homeLabel: string;
    navLabel: string;
    nav: NavItem[];
    menuOpen: string;
    menuClose: string;
  };
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  education: EducationContent;
  contact: ContactContent;
  resume: ResumeLink;
  footer: {
    copyright: (year: number) => string;
    socialLabel: string;
  };
  links: {
    github: NavItem;
    linkedin: NavItem;
  };
}
