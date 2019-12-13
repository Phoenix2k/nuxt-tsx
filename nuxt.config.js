export default {
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxt/typescript-build'],
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
    title: process.env.npm_package_name || ''
  },
  loading: {
    color: '#0C0'
  },
  mode: 'universal',
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
  typescript: {
    typeCheck: {
      eslint: true,
      eslintOptions: {
        cache: false,
        extensions: ['js', 'json', 'ts', 'tsx', 'vue'],
        fix: true,
        outputReport: true
      }
    }
  }
};
