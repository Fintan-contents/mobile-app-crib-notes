const path = require('path');

module.exports = function () {
  return {
    name: 'fix-footnote-order-plugin',
    getClientModules() {
      return [path.resolve(__dirname, './fix-footnote-order')];
    },
  };
};
