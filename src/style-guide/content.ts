// Textos da página temporária /style-guide. Ficam fora de src/content/pt-BR.ts
// de propósito: ao aprovar o visual, basta apagar a pasta src/style-guide.

export const styleGuide = {
  title: 'Style guide',
  intro:
    'Página temporária para aprovar o visual. Só existe em desenvolvimento e não entra no build de produção.',
  statesHint: 'Passe o mouse e use Tab para ver os estados de hover e foco.',

  colors: {
    number: '01',
    label: 'Cores',
    title: 'Tokens de cor',
    items: [
      { token: 'bg', hex: '#0B0D10', usage: 'Fundo da página' },
      { token: 'surface', hex: '#12151A', usage: 'Cards e moldura dos prints' },
      { token: 'surface-2', hex: '#181C22', usage: 'Hover, botões secundários e tags' },
      { token: 'border', hex: '#262B33', usage: 'Bordas decorativas' },
      { token: 'border-strong', hex: '#646D7A', usage: 'Borda de componentes interativos' },
      { token: 'text', hex: '#E8EAED', usage: 'Texto principal · 16.14:1' },
      { token: 'text-muted', hex: '#9BA3AE', usage: 'Texto secundário · 7.64:1' },
      { token: 'text-subtle', hex: '#7D8590', usage: 'Metadados · 5.22:1' },
      { token: 'accent', hex: '#F5A524', usage: 'Destaque · 9.53:1' },
      { token: 'accent-hover', hex: '#FFB84D', usage: 'Hover do botão principal' },
      { token: 'on-accent', hex: '#0B0D10', usage: 'Texto sobre o destaque' },
    ],
  },

  typography: {
    number: '02',
    label: 'Tipografia',
    title: 'IBM Plex Sans e IBM Plex Mono',
    samples: {
      display: 'Back-end Java com testes de verdade',
      h2: 'Projetos',
      h3Featured: 'Pátio',
      h3: 'Orbit',
      lead: 'Estudante de ADS em busca da primeira vaga como desenvolvedor back-end Java júnior ou estágio.',
      body: 'Minha jornada começou no curso técnico do SENAI, e foi lá que o Java e o back-end me pegaram: descobri que gosto da arquitetura que ninguém vê, mas que precisa ser resiliente e funcionar sempre.',
      small: '© 2026 Reginaldo Junior',
      label: 'Full stack · Web',
      tag: 'Spring Boot',
      data: 'OUT/2025 — 2028 · 300+ testes · reginaldojs12@gmail.com',
    },
    names: {
      display: 'Display · Sans 600',
      h2: 'H2 · Sans 600',
      h3Featured: 'H3 destaque · Sans 600',
      h3: 'H3 · Sans 600',
      lead: 'Lead · Sans 400 18px',
      body: 'Corpo · Sans 400 16px',
      small: 'Pequeno · Sans 400 14px',
      label: 'Rótulo · Mono 500 13px',
      tag: 'Tag · Mono 400 13px',
      data: 'Dado · Mono 500 14px',
    },
  },

  components: {
    number: '03',
    label: 'Componentes',
    title: 'Botões, links e tags',
    buttonsTitle: 'Hierarquia do hero',
    primary: 'Ver projetos',
    secondary: 'GitHub',
    download: 'Baixar currículo (PDF, 120 KB)',
    textLinksTitle: 'Links de texto',
    textLinks: ['API', 'Front-end'],
    tagsTitle: 'Tags',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'JUnit', 'Docker'],
  },

  card: {
    number: '04',
    label: 'Projetos',
    title: 'Card de exemplo',
    projectLabel: 'Projeto principal',
    name: 'Pátio',
    description:
      'Sistema full stack de uma revenda de carros, com catálogo, reserva com tempo de expiração, pagamento por cartão (Stripe), Pix e boleto, e painel administrativo.',
    image: {
      // Servido pelo Vite só em desenvolvimento; a pasta docs/referencias fica fora do git.
      src: '/docs/referencias/pátio.png',
      alt: 'Página inicial do Pátio, com o catálogo de carros da revenda.',
    },
    decisionsTitle: 'Decisões técnicas',
    decisions: [
      {
        title: 'Controle de concorrência com bloqueio pessimista',
        detail: 'SELECT ... FOR UPDATE impede que dois clientes reservem o mesmo carro.',
      },
      {
        title: 'Pagamentos idempotentes com webhook e reconciliação',
        detail: 'Uma cobrança repetida pela rede nunca vira duas cobranças.',
      },
      {
        data: '300+',
        title: 'testes com PostgreSQL real',
        detail: 'Testes unitários e de integração rodando contra o mesmo banco da produção.',
      },
      {
        title: 'CI com GitHub Actions',
        detail: 'Build e testes a cada push.',
      },
    ],
    backendTitle: 'Back-end',
    backend: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'Stripe'],
    frontendTitle: 'Front-end',
    frontend: ['React', 'Tailwind', 'TanStack Query', 'Playwright'],
    deploy: { label: 'Ver deploy', href: 'https://frontend-sistema-venda-carros.vercel.app' },
    repos: [
      { label: 'API', href: 'https://github.com/reginaldo-junior-dev/api-sistema-venda-carros' },
      {
        label: 'Front-end',
        href: 'https://github.com/reginaldo-junior-dev/frontend-sistema-venda-carros',
      },
    ],
  },
};
