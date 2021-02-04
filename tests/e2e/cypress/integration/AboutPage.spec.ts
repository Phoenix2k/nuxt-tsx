/// <reference types="cypress" />

describe('About page', () => {
  it('Visits the about page', () => {
    cy.visit('/about');
    cy.contains('.title', 'About');
    if (!Cypress.env('CI')) {
      cy.screenshot('screenshot');
    }
  });
});
