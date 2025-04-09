// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'reka-ui/nuxt',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ],
    },
  },

  css:    ['~/assets/css/main.css'],
  srcDir: './app',
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-27',

  eslint: {
    config: { stylistic: true },
  },

  i18n: {
    strategy:      'prefix',
    defaultLocale: 'en',
    locales:       [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pl', iso: 'pl-PL', name: 'Polski', file: 'pl.json' },
    ],
  },

  icon: {
    customCollections: [
      {
        prefix: 'my',
        dir:    './app/assets/icons',
      },
    ],
  },

  reka: {
    prefix: 'Reka',
  },
});
