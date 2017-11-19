const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Shopping List',
  template: './src/index.ejs',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[hash].[ext]',
        }
      },
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: __dirname + '/src',
        query: {
          presets:['react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: __dirname + '/src'
      }
    ]
  }
}
