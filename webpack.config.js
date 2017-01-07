const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? ['./src/app.js']
  : [
    'react-hot-loader/patch',
    './src/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
  ];

const plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: true,
      compress: {
        warnings: true,
      },
    })]
  : [new webpack.HotModuleReplacementPlugin()];

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: '/node_modules/',
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      exclude: '/node_modules/',
    }, {
      test: /\.(png|jpg|gif|svg|ico)$/,
      loaders: ['url-loader?limit=10000&name=img/[hash:12].[ext]'],
      exclude: '/node_modules/',
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
};
