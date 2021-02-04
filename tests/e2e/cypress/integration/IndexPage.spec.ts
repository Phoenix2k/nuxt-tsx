/// <reference types="cypress" />

describe('Index page', () => {
  it('Visits the index page', () => {
    cy.visit('/');
    cy.contains('h1', 'nuxt-tsx');
    if (!Cypress.env('CI')) {
      cy.screenshot('screenshot');
    }
  });
});
