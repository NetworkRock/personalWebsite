const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.(csv|jpg|ico)$/,
        type: 'asset/resource'
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ 
    template: 'index.html',
    favicon: './icons/favicon.ico',
  })],
  mode: process.env.NODE_ENV === "production" ? "production" : "development"
}