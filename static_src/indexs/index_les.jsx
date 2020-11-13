import React from "react";
import ReactDOM from "react-dom";

// // до JSX
// const element = React.createElement(
//   "h1",
//   { className: "element" },
//   "Кажется, мы подключили React"
// );
// после JSX
const element = <h1 className="element">Кажется, мы подключили React</h1>;

ReactDOM.render(element, document.getElementById("root"));

//Функциональные компоненты. отделяют вёрстку от содержимого. Объявляются в виде функций(обычные элементы - как переменные). Передаём текст в качестве аргумента, что позволит переиспользовать функциональный. Компонент (определяется с большой буквы). Вызывается с помощью синтаксиса JSX, а переменные, которые передаются в него, попадают в словарь props .
const content = "Кажется, мы всё ещё подключаем React";
const Component = (props) => <h1 className="element">{props.content}</h1>;
ReactDOM.render(
  <Component content={content} />,
  document.getElementById("root_2")
);

