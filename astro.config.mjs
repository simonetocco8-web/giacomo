import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { site as siteData, locales, localePath, galleryPath } from './src/data/site.ts';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const configured = process.env.SITE_URL || env.SITE_URL || siteData.url;
const site = configured ? new URL(configured).origin : undefined;
if (site && !site.startsWith('https://')) throw new Error('SITE_URL must use HTTPS');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'it', locales: [...locales], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({
    // Match the Italian root and the localized homepage URLs.
    serialize: (item) => {
      const pagePath = new URL(item.url).pathname.endsWith('/gallery/') ? galleryPath : localePath;
      return { ...item, links: locales.map(lang => ({ lang, url: new URL(pagePath(lang), site).href }))
        .concat({ lang: 'x-default', url: new URL(pagePath('it'), site).href }) };
    },
  })],
  vite: { plugins: [tailwindcss()] },
});
