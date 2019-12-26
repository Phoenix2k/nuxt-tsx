const cypressWebpackPreprocessor = require('./preprocessor');
/**
 * Cypress plugins
 *
 * This function is called when a project is opened or re-opened.
 *
 * @param {string} on Hooks into various events Cypress emits.
 * @param {string} _config Cypress config.
 * @link https://on.cypress.io/plugins-guide
 */
module.exports = (on, _config) => {
  /**
   * Load preprocessor
   *
   * Adds support for additional features such as TypeScript.
   */
  on('file:preprocessor', cypressWebpackPreprocessor);
};
