// Docs: https://stylelint.io/user-guide/configuration
module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': null
  }
};
