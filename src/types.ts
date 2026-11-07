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

export interface AboutContent {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
}

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

export interface ProjectsContent {
  number: string;
  label: string;
  title: string;
  featuredLabel: string;
  backendLabel: string;
  frontendLabel: string;
  technologiesLabel: string;
  deployLabel: string;
  swaggerLabel: string;
}

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

export interface EducationItem {
  period: string;
  course: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  href?: string;
}

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

export interface MetaContent {
  siteUrl: string;
  title: string;
  description: string;
  locale: string;
  siteName: string;
  ogImage: Image;
}

export interface ResumeLink {
  href: string;
  label: string;
}

export interface Content {
  meta: MetaContent;
  separators: {
    section: string;
    inline: string;
  };
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
