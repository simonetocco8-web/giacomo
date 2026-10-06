import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const configured = process.env.SITE_URL || env.SITE_URL;
const site = configured ? new URL(configured).origin : undefined;
if (site && !site.startsWith('https://')) throw new Error('SITE_URL must use HTTPS');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'it', locales: ['it', 'en', 'de'], routing: { prefixDefaultLocale: true } },
  integrations: site ? [sitemap({ filter: (page) => new URL(page).pathname !== '/', i18n: { defaultLocale: 'it', locales: { it: 'it', en: 'en', de: 'de' } } })] : [],
  vite: { plugins: [tailwindcss()] },
});
