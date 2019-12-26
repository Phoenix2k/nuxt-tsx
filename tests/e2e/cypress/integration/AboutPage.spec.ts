/// <reference types="cypress"/>

describe('About page', () => {
  it('Visits the about page', () => {
    cy.visit('/about');
    cy.contains('.title', 'About');
    cy.screenshot('screenshot');
  });
});
