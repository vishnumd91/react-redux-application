const { merge } = require('webpack-merge');

const common = require('./webpack.config.common');

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    port: PORT,
    host: 'localhost',
    hot: true,
    stats: 'minimal',
    overlay: true,
    disableHostCheck: true,
    https: false,
  },
});
