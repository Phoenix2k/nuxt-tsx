/// <reference types="cypress" />
/// <reference types="../index" />
/**
 * Adds custom command `cy.itemProp` to the global `cy` object.
 *
 * @example cy.itemProp('title')
 * @param {string} value Itemprop value to look for.
 * @return {Cypress.Chainable<JQuery<HTMLElement>>} jQuery HTMLElement.
 */
Cypress.Commands.add(
  'itemProp',
  (value: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(`[itemprop=${value}]`);
  }
);
