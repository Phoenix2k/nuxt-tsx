/**
 * Screenshot API
 *
 * @link https://docs.cypress.io/api/cypress-api/screenshot-api.html
 */
Cypress.Screenshot.defaults({
  capture: 'fullPage',
  disableTimersAndAnimations: true,
  scale: false,
  screenshotOnRunFailure: !Cypress.env('CI')
});
