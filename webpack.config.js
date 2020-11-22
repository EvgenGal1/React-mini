// подключение пакет пафз через константу. для корректного поиска точки входа
const path = require("path");
const webpack = require("webpack");

// 1. экспот настроек
module.exports = {
  // 1. точка входа. файл, с которого начинается сборка приложения.
  entry: {
    // 1. путь к файлу. может быть несколько точек входа
    app: "./index.jsx",
  },
  // 1. папка, в которой нужно искать entry
  context: path.resolve(__dirname, "static_src"),
  // 1. точка выхода.
  output: {
    // 1. имя файла сборки. прописывая в [] получаем имя из ярлыка на входе(app). можно прописать имя - "app.js"
    filename: "[name].js",
    // 1. путь. метод resolve передает параметры. dirname - путь до папки, c исполнительным файлом (корневая папка). дальше папки
    path: path.resolve(__dirname, "static", "build"),
    publicPath: "/static/build/",
  },
  module: {
    // 1. правила. массив объектов
    rules: [
      // 1. объекты
      // 1. Babel - loader, преобразуют исходный код модулей в более старый
      {
        // 1. параметры объекта
        // 1. поддерка js и jsx
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "static_src"),
        // 1. обработчик. через что обрабатываем
        loader: "babel-loader",
        // 1. исключение из компиляции node_modules
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env", "@babel/react"],
          // 2.
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              {
                loose: true,
              },
            ],
          ],
        },
        // 1. не работает
        //   query: {
        //     presets: ["@babel/env", "@babel/react"],
        //   },
      },
    ],
  },
  // 1. настройка devServera
  devServer: {
    // показ ошибок(красным) на самой странице(не в консоли)
    overlay: true,
  },

  // 2. Для импортирта jsx-файлы без расширения
  resolve: {
    modules: [`${__dirname} /static_src`, "node_modules"],
    extensions: [".js", ".jsx"],
  },
};
