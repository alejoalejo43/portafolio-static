const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/index.js'],
  /* mode: 'development', */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: './dist/',
    watchContentBase: true,
    hot: true,
    open: true,
    //include: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      template: './src/portfolio.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'acerca.html',
      template: './src/acerca.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/, //test all the files that end with .scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/, //test all the files that end with .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
};
