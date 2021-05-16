const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = (env) => {
  return {
    entry: './app/index.js', // точка входа

    module: { // нужны для распознавания импорта svg, css в js
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

    plugins: [  // работают после завершения сборки
      new HtmlWebpackPlugin(),
      /* new webpack.EnvironmentPlugin({ // плагин для использования в коде process.env.NODE_ENV
          'NODE_ENV': 'development' // выставляется при сборке
        }
      ) */
    ],

    mode: env.production ? 'production' : 'development' // присваивает значение переменной process.env.NODE_ENV при сборке. production - минифицирует js.
  }
}
