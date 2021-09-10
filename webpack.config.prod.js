const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',

  devtool: false,

  // performance object will restrict the size of the output bundle
  performance: {
    hints: false, // disable performance warnings
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  // optimization object will optimize the output bundle by splitting into different chunks
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          processorOptions: {
            parser: 'sugarss',
          },
        },
        minify: [
          CssMinimizerPlugin.cleanCssMinify,
          CssMinimizerPlugin.cleanCssMinify,
        ],
      }),
      new TerserPlugin({
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
        },
      }),
    ],
  },
});
