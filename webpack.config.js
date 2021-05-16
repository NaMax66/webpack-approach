const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: "./app/index.js", // точка входа
  module: { // нужны для распознавания импорта
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }, // сначала css-loader для импорта css. потом style-loader для вставки в DOM
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  output: { // место, где лежат собранные файлы
    path: path.resolve(__dirname, 'dist'),
    filename: "index_bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin({
        'NODE_ENV': 'production'
      }
    )
  ] // работают после завершения сборки
}
