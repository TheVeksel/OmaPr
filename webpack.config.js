const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к выходной директории
    filename: 'bundle.js', // Имя выходного файла
    publicPath: '/', // Путь для доступа к статическим файлам
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'], // Расширения файлов
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Для TypeScript файлов
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Для CSS файлов
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Для SCSS файлов
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Для изображений
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Для шрифтов
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищает выходную папку перед каждой сборкой
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон для создания index.html
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/photo', to: 'photo' }, // Копирование папки с изображениями
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Путь к статическим файлам для devServer
    port: 3000, // Порт для сервера
    open: true, // Автоматически открывать браузер
    hot: true, // Включить горячую замену модулей
    historyApiFallback: true, // Для поддержки маршрутизации
  },
  mode: 'development', // Режим разработки
};
