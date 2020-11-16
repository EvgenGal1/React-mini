// подключение пакет пафз через константу. для корректного поиска точки входа
const path = require("path");
const webpack = require("webpack");

// экспот настроек
module.exports = {
  // точка входа. файл, с которого начинается сборка приложения.
  entry: {
    // путь к файлу. может быть несколько точек входа
    app: "./index.jsx",
  },
  // папка, в которой нужно искать entry
  context: path.resolve(__dirname, "static_src"),
  // точка выхода.
  output: {
    // имя файла сборки. прописывая в [] получаем имя из ярлыка на входе(app)
    // можно прописать имя "app.js"
    filename: "[name].js",
    // путь. метод resolve передает параметры
    // dirname - путь до папки, c исполнительным файлом (корневая папка). дальше папки
    path: path.resolve(__dirname, "static", "build"),
    publicPath: "/static/build/",
  },
  module: {
    // правила. массив объектов
    rules: [
      // объекты
      // Babel - loader, преобразуют исходный код модулей в более старый
      {
        // параметры объекта
        // поддерка js и jsx
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "static_src"),
        // обработчик. через что обрабатываем
        loader: "babel-loader",
        // исключение из компиляции node_modules
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env", "@babel/react"],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              {
                loose: true,
              },
            ],
          ],
        },
        // не работает
        //   query: {
        //     presets: ["@babel/env", "@babel/react"],
        //   },
      },
    ],
  },
  // настройка devservera
  devServer: {
    // показ ошибок(красным) на самой странице(не в консоли)
    overlay: true,
  },
};
