import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://lesleyandrez.github.io',
    base: '/receitas',
    experimental: {
        assets: true
    },
});
