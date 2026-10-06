import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const configured = process.env.SITE_URL || env.SITE_URL || 'https://villamariaelena.it';
const site = configured ? new URL(configured).origin : undefined;
if (site && !site.startsWith('https://')) throw new Error('SITE_URL must use HTTPS');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'it', locales: ['it', 'en', 'de'], routing: { prefixDefaultLocale: true } },
  integrations: [sitemap({
    // The language selector is not a second Italian homepage.
    // Explicit alternates avoid duplicate `it` entries for / and /it/.
    serialize: (item) => ({
      ...item,
      links: ['it', 'en', 'de'].map((lang) => ({ lang, url: new URL(`/${lang}/`, site).href }))
        .concat({ lang: 'x-default', url: new URL('/it/', site).href }),
    }),
  })],
  vite: { plugins: [tailwindcss()] },
});
