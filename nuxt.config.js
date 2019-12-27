require('dotenv').config();

export default {
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          exclude: /(node_modules)/,
          loader: 'eslint-loader',
          options: {
            fix: true
          },
          test: /\.(js|json|ts|tsx)$/
        });
      }
    }
  },
  buildModules: [
    ['@nuxtjs/dotenv', { filename: '.env' }],
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    link: [
      {
        href: '/favicon.ico',
        rel: 'icon',
        type: 'image/x-icon'
      }
    ],
    meta: [
      {
        charset: 'utf-8'
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport'
      },
      {
        content: process.env.npm_package_description || '',
        hid: 'description',
        name: 'description'
      }
    ],
    title: process.env.name || ''
  },
  loading: {
    color: '#0C0'
  },
  manifest: {
    background_color: '#fff',
    description: 'Nuxt.js build with TypeScript and TSX support',
    display: 'standalone',
    icons: [
      {
        sizes: '32x32',
        src: 'favicon.ico',
        type: 'image/x-icon'
      },
      {
        sizes: '512x512',
        src: 'logo.png',
        type: 'image/png'
      }
    ],
    name: 'Nuxt.tsx',
    short_name: 'NuxtTSX',
    start_url: '.'
  },
  mode: 'universal',
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  stylelint: {
    configFile: './.stylelintrc.json',
    emitError: true,
    files: ['{assets,components,layouts,pages}/**/*.scss'],
    fix: true
  },
  typescript: {
    typeCheck: {
      eslint: true,
      eslintOptions: {
        cache: false,
        extensions: ['js', 'json', 'ts', 'tsx'],
        fix: true,
        outputReport: true
      }
    }
  }
};
