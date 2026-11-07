import type { Content } from '../types';

const githubUrl = 'https://github.com/reginaldo-junior-dev';
const linkedinUrl = 'https://www.linkedin.com/in/reginaldo-junior-ws-dev/';

export const ptBR: Content = {
  meta: {
    siteUrl: 'https://portifolio-chi-azure-69.vercel.app',
    title: 'Reginaldo Junior · Desenvolvedor Back-end Java',
    description:
      'Portfólio de Reginaldo Junior, desenvolvedor back-end Java em busca de vaga júnior ou estágio. APIs com Spring Boot, segurança, testes e CI/CD. Rio de Janeiro.',
    locale: 'pt_BR',
    siteName: 'Reginaldo Junior',
    ogImage: {
      src: '/images/og.png',
      alt: 'Reginaldo Junior, desenvolvedor back-end Java',
      width: 1200,
      height: 630,
    },
  },
  separators: {
    section: '—',
    inline: '·',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    opensInNewTab: '(abre em nova aba)',
  },
  header: {
    name: 'Reginaldo Junior',
    homeHref: '#inicio',
    homeLabel: 'Reginaldo Junior, voltar ao início',
    navLabel: 'Seções da página',
    nav: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Formação', href: '#formacao' },
      { label: 'Contato', href: '#contato' },
    ],
    menuOpen: 'Menu',
    menuClose: 'Fechar',
  },
  hero: {
    label: 'Reginaldo Junior · São João de Meriti, RJ',
    title: 'Desenvolvedor Back-end Java',
    lead: 'Desenvolvedor back-end Java. Construo APIs com Spring Boot pensando em segurança, consistência dos dados e testes.',
    availability:
      'Disponível para vagas back-end Java júnior ou estágio · Remoto, híbrido ou presencial no Rio de Janeiro',
    photo: {
      src: '/images/foto.webp',
      alt: 'Foto de Reginaldo Junior',
      width: 720,
      height: 992,
    },
    primaryCta: { label: 'Ver projetos', href: '#projetos' },
  },
  about: {
    number: '01',
    label: 'Sobre',
    title: 'Sobre mim',
    paragraphs: [
      'Olá! Sou estudante de Análise e Desenvolvimento de Sistemas na Estácio e estou em busca da minha primeira oportunidade como Desenvolvedor Back-end Java.',
      'Minha jornada começou no curso técnico do SENAI, e foi lá que o Java e o back-end me pegaram: descobri que gosto da arquitetura que ninguém vê, mas que precisa ser resiliente e funcionar sempre. Por isso, trato cada projeto de estudo como se fosse para produção.',
    ],
  },
  skills: {
    number: '02',
    label: 'Habilidades',
    title: 'Habilidades',
    groups: [
      { category: 'Linguagem', technologies: 'Java 21' },
      {
        category: 'Back-end',
        technologies: 'Spring Boot, Spring Security, Spring Data JPA, JDBC',
      },
      { category: 'Banco de dados', technologies: 'PostgreSQL, MySQL, Flyway' },
      { category: 'Testes', technologies: 'JUnit, Mockito, MockMvc' },
      { category: 'Ferramentas', technologies: 'Maven, Docker, GitHub Actions, Swagger/OpenAPI' },
      { category: 'Front-end (base)', technologies: 'HTML, CSS, JavaScript, React' },
    ],
  },
  projects: {
    number: '03',
    label: 'Projetos',
    title: 'Projetos',
    featuredLabel: 'Projeto principal',
    backendLabel: 'Back-end',
    frontendLabel: 'Front-end',
    technologiesLabel: 'Tecnologias',
    deployLabel: 'Ver deploy',
    swaggerLabel: 'Swagger',
  },
  education: {
    number: '04',
    label: 'Formação',
    title: 'Formação',
    items: [
      {
        period: 'Out/2025 — 2028',
        course: 'Análise e Desenvolvimento de Sistemas',
        details: 'Estácio · Em andamento, conclusão prevista para 2028',
      },
      {
        period: '2025',
        course: 'Técnico em Desenvolvimento de Sistemas',
        details: 'SENAI · Concluído',
      },
    ],
    certifications: {
      title: 'Certificações',
      validateLabel: 'Validar certificado',
      items: [],
    },
  },
  contact: {
    number: '05',
    label: 'Contato',
    title: 'Contato',
    intro:
      'Estou em busca da minha primeira vaga como desenvolvedor back-end Java. Se o meu perfil combina com o que você procura, fale comigo por e-mail ou pelo LinkedIn.',
    items: [
      {
        label: 'E-mail',
        value: 'reginaldojs12@gmail.com',
        href: 'mailto:reginaldojs12@gmail.com',
        external: false,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/reginaldo-junior-ws-dev',
        href: linkedinUrl,
        external: true,
      },
      {
        label: 'GitHub',
        value: 'github.com/reginaldo-junior-dev',
        href: githubUrl,
        external: true,
      },
    ],
  },
  resume: {
    href: '/Reginaldo_Junior_Desenvolvedor_BackEnd_Java.pdf',
    label: 'Baixar currículo (PDF, 95 KB)',
  },
  footer: {
    copyright: (year) => `© ${year} Reginaldo Junior`,
    socialLabel: 'Redes',
  },
  links: {
    github: { label: 'GitHub', href: githubUrl },
    linkedin: { label: 'LinkedIn', href: linkedinUrl },
  },
};
