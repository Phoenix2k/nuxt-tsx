# Testing

This build comes bundled with [Cypress][cypress] for end to end tests and [Jest][jest] for unit tests.

## Run all tests
```sh
$ npm test
```
This will run both end-to-end and unit tests.

## End to end tests with Cypress
```sh
$ npm run test:e2e
```
This will first generate the project and start a dev server before running the tests.

When running locally, it will generate screenshots in the `tests/e2e/cypress/screenshots` folder and videos in `tests/e2e/cypress/videos`.

## Unit tests with Jest
```sh
$ npm run test:unit
```
This will look for `.spec.ts` or `.test.ts` files within [Nuxt folders][nuxt-folders] and run all the tests it can find.

When running locally, Jest will generate a full coverage report using [Istanbul] and place it in the `tests/coverage` folder.

## Update snapshots
```sh
$ npm run test:update
```

[cypress]: https://www.cypress.io/
[jest]: https://jestjs.io/
[istanbul]: https://istanbul.js.org/
[nuxt-folders]: https://nuxtjs.org/guide/directory-structure/
