const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? ['./app/app.js']
  : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './app/app.js'
  ];

const plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new HTMLWebpackPlugin({
      template: './app/indexTemplate.html' 
  })
  ]
  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
)

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
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
  // resolve: {
  // extensions: ['*', '.js', '.jsx']
  // },
  plugins: plugins,
}
