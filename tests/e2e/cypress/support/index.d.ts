/// <reference types="cypress" />
/**
 * Custom TypeScript definitions
 */
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by `itemprop` attribute.
     */
    itemProp(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
