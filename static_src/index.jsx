import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MessageField from './components/MessageField.jsx';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Как можно подключать файлы в index.js:
// 1. ищет в текущей дериктории, затем в node_modules, из которого пройдет по пути из настроек,
// /static/build/react.js. поэтому путь можно упустить. просто прописав пакет.
// import 'react';
// 2. прямо по пути, для избирательного подключения
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// 3. для того чтобы взаимодействовать и/или использовать
// import React from 'react';
// 4. подвес на window глобального файла
// window.React = requre('react')	

//?  Почему то не работает вместе с App. Перебивают его
import './indexs/index_les.jsx';
import "./indexs/index_mes.jsx";
//?  Почему то не работает вместе с indexs. Перебивается ими

// 2. Используется export default вместо просто export . 
// Поэтому мы импортируем компонент без использования фигурных скобок. При этом не обязательно называть импортируемую переменную так же, как экспортируемую. Например, мы могли бы сделать так:
// import DefaultExport from './components/App.jsx';
// до 2.13 import App from './components/App.jsx';
// 2.13

ReactDOM.render(
	<App />, document.getElementById('root_4')
);


ReactDOM.render(
	<MessageField />, document.getElementById('root')
);

// ReactDOM.render(
// 	<MuiThemeProvider>
// 		<MessageField />
// 	</MuiThemeProvider>,
// 	document.getElementById('root'),
// );

// import Message from './components/Message.jsx';

// ReactDOM.render(
// 	<Message />, document.getElementById('root')
// );




