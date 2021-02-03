const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@element': path.resolve(__dirname, './src/components/element'),
      },
    },
  },

};
