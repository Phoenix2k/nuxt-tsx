/// <reference types="cypress" />
/**
 * Adds custom command `cy.itemProp` to the global `cy` object.
 *
 * @example cy.itemProp('title')
 * @param {string} value Itemprop value to look for.
 */
Cypress.Commands.add(
  'itemProp',
  /* eslint-disable no-undef */
  (value: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(`[itemprop=${value}]`);
  }
);
