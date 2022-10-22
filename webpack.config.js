const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { IndexedSourceMapConsumer } = require('source-map');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: path.resolve(__dirname,'./src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname,'/node-modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: path.resolve(__dirname,'/node-modules'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      }
    ]
  }
};