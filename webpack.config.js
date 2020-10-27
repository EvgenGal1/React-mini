const path = require("path");
const webpack = require("webpack");

module.exports = {
  // файл, с которого начинается сборка приложения.
  entry: {
    app: "./index.jsx",
  },
  // папка, в которой нужно искать entry
  context: path.resolve(__dirname, "static_src"),
  // содержит имя файла сборки (filename) и путь до папки, куда этот файл будет сохранен (path).
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "app.js",
    publicPath: "/static/build/",
  },
  // Babel - loader, преобразуют исходный код модулей в более старый
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "static_src"),
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
        // не работает
        //   query: {
        //     presets: ["@babel/env", "@babel/react"],
        //   },
      },
    ],
  },
};
