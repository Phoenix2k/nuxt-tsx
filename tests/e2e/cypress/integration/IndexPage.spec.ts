/// <reference types="cypress"/>
/// <reference types="../support"/>
/**
 * Index page
 */
describe('Index page', () => {
  it('Visits the index page', () => {
    cy.visit('/');
    cy.contains('h1', 'nuxt-tsx');
    cy.itemProp('title').should('be.visible');
    if (!Cypress.env('CI')) {
      cy.screenshot('screenshot');
    }
  });
});
