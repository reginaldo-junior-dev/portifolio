import type { Project } from '../types';

// Projetos na ordem da spec (docs/spec.md 3.4). O primeiro é o projeto em destaque.
export const projects: Project[] = [
  {
    id: 'patio',
    name: 'Pátio',
    type: 'Full stack · Web',
    description:
      'Sistema full stack de uma revenda de carros, com catálogo, reserva com tempo de expiração, pagamento por cartão (Stripe), Pix e boleto, e painel administrativo.',
    authorship: 'Desenvolvi a API; o front-end foi feito com apoio de IA.',
    tags: {
      backend: [
        'Java 21',
        'Spring Boot',
        'Spring Security',
        'JWT em cookie HttpOnly',
        'OAuth2 Google',
        'Spring Data JPA',
        'PostgreSQL',
        'Flyway',
        'Stripe',
        'AWS S3',
        'MapStruct',
        'Swagger',
        'JUnit',
        'Mockito',
        'MockMvc',
        'Docker',
        'GitHub Actions',
      ],
      frontend: ['React', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Playwright'],
    },
    images: [
      {
        src: '/images/projetos/patio.png',
        alt: 'Página inicial do Pátio: chamada para o catálogo de carros e busca por marca, tipo e preço',
        width: 1897,
        height: 911,
      },
    ],
    links: {
      deploy: 'https://frontend-sistema-venda-carros.vercel.app',
      repositories: [
        { label: 'API', href: 'https://github.com/reginaldo-junior-dev/api-sistema-venda-carros' },
        {
          label: 'Front-end',
          href: 'https://github.com/reginaldo-junior-dev/frontend-sistema-venda-carros',
        },
      ],
    },
  },
  {
    id: 'orbit',
    name: 'Orbit',
    type: 'Full stack · Web',
    description: 'SaaS de produtividade para gestão de tarefas, projetos e metas.',
    authorship: 'Desenvolvi a API; o front-end foi feito com apoio de IA.',
    tags: {
      backend: [
        'Java 21',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'Spring Data JPA',
        'PostgreSQL',
        'Flyway',
        'Swagger',
        'JUnit',
        'Mockito',
        'MockMvc',
        'Mercado Pago SDK',
      ],
      frontend: ['React', 'Vite', 'Tailwind CSS'],
    },
    images: [
      {
        src: '/images/projetos/orbit.png',
        alt: 'Página inicial do Orbit, SaaS de produtividade, com a chamada principal e o botão para começar',
        width: 1900,
        height: 910,
      },
    ],
    links: {
      deploy: 'https://orbit-inky-xi.vercel.app',
      repositories: [
        { label: 'Back-end', href: 'https://github.com/reginaldo-junior-dev/orbit-backend' },
        { label: 'Front-end', href: 'https://github.com/reginaldo-junior-dev/orbit' },
      ],
    },
  },
  {
    id: 'estoque',
    name: 'Gerenciador de Estoque',
    type: 'Desktop · SENAI',
    description:
      'Sistema desktop para controle de estoque de alimentos, com login por perfil, entradas e saídas, alerta de validade e relatórios em PDF. Projeto do curso técnico do SENAI.',
    tags: {
      backend: ['Java 21', 'Swing', 'JDBC', 'MySQL', 'JasperReports', 'BCrypt', 'Maven'],
      frontend: [],
    },
    images: [
      {
        src: '/images/projetos/estoque.png',
        alt: 'Tela de cadastro de produto do Gerenciador de Estoque, com nome, categoria, validade, quantidade e preço',
        width: 1320,
        height: 701,
      },
    ],
    links: {
      repositories: [
        {
          label: 'Repositório',
          href: 'https://github.com/reginaldo-junior-dev/Projeto-java-Gerenciador-de-estoque',
        },
      ],
    },
  },
];
