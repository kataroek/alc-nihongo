import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

const mode = 'prod'; // dev || prod
const siteURL =
  mode === 'prod' ? 'https://nihongo.alc.co.jp' : 'https://test-wacul.site';
const basePath = mode === 'prod' ? '/pages/company/lp01' : '/alc/nihongo.alc';

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  base: basePath,
  integrations: [tailwind()]
});
