const path = require('path');

module.exports = function () {
  return {
    name: 'medium-zoom-docusaurus-plugin',
    getClientModules() {
      return [path.resolve(__dirname, './attach-medium-zoom')];
    },
  };
};
