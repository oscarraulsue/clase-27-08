const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/index.js',
  modo:'production',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ],

};
