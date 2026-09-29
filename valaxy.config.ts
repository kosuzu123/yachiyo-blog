// import type { UserThemeConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig({
  // site config see site.config.ts

  theme: 'sakura',
  vite: {
    base: process.env.BLOG_BASE || '/',
  },

  themeConfig: {
    hero: {
      urls: [
        '/images/background/background-01.webp',
        '/images/background/background-02.webp',
        '/images/background/background-04.webp',
        '/images/background/background-05.webp',
        '/images/background/background-06.webp',
        '/images/background/background-07.webp',
        '/images/background/background-08.webp',
        '/images/background/background-09.webp',
      ].map(path => `${(process.env.BLOG_BASE || '/').replace(/\/$/, '')}${path}`),
      randomUrls: true,
    },
  },

  unocss: { safelist },
})
