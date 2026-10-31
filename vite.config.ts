import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { content } from './src/content';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

// Escreve as metatags (docs/spec.md 7) no lugar do comentário <!--app-meta--> do index.html,
// com os textos de `content.meta`. Assim o HTML já sai pronto para o Google e para as
// prévias de link (LinkedIn, WhatsApp), que não rodam JavaScript.
function metaTags(): Plugin {
  const { meta } = content;
  const imageUrl = new URL(meta.ogImage.src, meta.siteUrl).href;
  const pageUrl = new URL('/', meta.siteUrl).href;

  const tags: [string, Record<string, string | number>][] = [
    ['meta', { name: 'description', content: meta.description }],
    ['link', { rel: 'canonical', href: pageUrl }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: pageUrl }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:description', content: meta.description }],
    ['meta', { property: 'og:site_name', content: meta.siteName }],
    ['meta', { property: 'og:locale', content: meta.locale }],
    ['meta', { property: 'og:image', content: imageUrl }],
    ['meta', { property: 'og:image:width', content: meta.ogImage.width }],
    ['meta', { property: 'og:image:height', content: meta.ogImage.height }],
    ['meta', { property: 'og:image:alt', content: meta.ogImage.alt }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: meta.title }],
    ['meta', { name: 'twitter:description', content: meta.description }],
    ['meta', { name: 'twitter:image', content: imageUrl }],
    ['meta', { name: 'twitter:image:alt', content: meta.ogImage.alt }],
  ];

  const html = [
    `<title>${escapeHtml(meta.title)}</title>`,
    ...tags.map(([tag, attrs]) => {
      const attributes = Object.entries(attrs)
        .map(([key, value]) => `${key}="${escapeHtml(String(value))}"`)
        .join(' ');
      return `<${tag} ${attributes} />`;
    }),
  ].join('\n    ');

  return {
    name: 'meta-tags',
    transformIndexHtml: (page) => page.replace('<!--app-meta-->', html),
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), metaTags()],
});
