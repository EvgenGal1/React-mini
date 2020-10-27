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

//

const content = "Кажется, мы всё ещё подключаем React";
const Component = (props) => <h1 className="element">{props.content}</h1>;
ReactDOM.render(
  <Component content={content} />,
  document.getElementById("root_2")
);

//

let messages = ["Привет", "Как дела?"];
const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />);
};
ReactDOM.render(
  <MessageField messages={messages} />,
  document.getElementById("root_3")
);
