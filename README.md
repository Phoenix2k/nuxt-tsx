# Nuxt TSX

![Nuxt.js build with TypeScript and TSX support][screenshot]

## Build
* [Nuxt.js][nuxt]
* [Cypress][cypress]
* [ESLint][eslint] with [TypeScript support][eslint-ts]
* [Jest][jest]
* [Prettier][prettier]
* [SCSS][sass-lang]
* [Stylelint][stylelint]

## Requirements
* [Node.js][node]

## Installation
```sh
$ npm run install
```

## Development

### Serve with hot reload
```sh
$ npm run dev
```
Default location: [`http://localhost:3000/`](http://localhost:3000/)
### Build for production and launch server
```sh
$ npm run build
$ npm run start
```

### Generate static project
```sh
$ npm run generate
```
Files will be generated in the `dist` folder.

### Linting
```sh
$ npm run lint
```

#### Fix files automatically
```
$ npm run lint:fix
```

### Testing

#### Run all tests
```sh
$ npm test
```

#### End to end tests with Cypress
```sh
$ npm run test:e2e
```

#### Unit tests with Jest
```sh
$ npm run test:unit
```

#### Update snapshots
```sh
$ npm run test:update
```

## Links
For detailed explanation on how things work, check out [Nuxt.js docs][nuxt]. To learn more about the TypeScript build, visit [Nuxt TypeScript][nuxt-ts].

## License
[![MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)

[cypress]: https://www.cypress.io/
[eslint-ts]: https://typescript.nuxtjs.org/guide/lint.html
[eslint]: https://eslint.org/
[jest]: https://jestjs.io/
[node]: https://nodejs.org/
[nuxt]: https://nuxtjs.org/
[nuxt-ts]: https://typescript.nuxtjs.org/
[prettier]: https://prettier.io/
[sass-lang]: https://sass-lang.com/
[screenshot]: static/screenshot.png
[stylelint]: https://stylelint.io/