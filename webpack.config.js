const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = (env, argv) => ({
  mode: env,
  target: 'web',
  entry: {
    test1: './index.js',
  },
  output: {
    path: __dirname,
    filename: './[name].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './[name].bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                ctx: {
                  env: argv.mode
                }
              }
            }
          }
        ]
      }
    ]
  }
});