var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    clientLogLevel: 'error',
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: './src/index.html' //relative to root of the application
    })
]
};