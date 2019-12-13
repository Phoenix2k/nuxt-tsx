module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:json/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier'],
  root: true,
  rules: {}
};
