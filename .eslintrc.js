module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:json/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  root: true,
  rules: {}
};
