const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const V8LazyParse = require('v8-lazy-parse-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? {
    app: './app/app.js',
    vendor: [
      'vue',
      'vuex',
      'vue-router',
      'vuex-router-sync',
      'promise-polyfill'
    ],
  }
  : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/app.js'
  ];

const plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new HTMLWebpackPlugin({
      template: './app/indexTemplate.html',
      removeRedundantAttributes: true,
      minify: {
        collapseWhitespace: false,
        removeComments: false
      },
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      updateStrategy: 'all',
      preferOnline: true,
      safeToUseOptionalCaches: true,
      caches: 'all',
      version: 'alnasl[hash]',
      ServiceWorker: {
        navigateFallbackURL: '/',
        events: true
      },
      AppCache: false
    }),
    new V8LazyParse(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash:8].js'
    }),
  ]
  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dashboard()
  ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
)

module.exports = {
  devtool: PRODUCTION ? 'source-map' : 'inline-source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js',
    chunkFilename: '[id].[hash:8].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/',
    }, {
      test: /\.(png|jpg|gif|svg|ico)$/,
      loaders: ['url-loader?limit=10000&name=img/[hash:12].[ext]'],
      exclude: '/node_modules/',
    }],
  },
  plugins: plugins,
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
}
