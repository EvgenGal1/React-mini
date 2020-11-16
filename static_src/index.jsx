import React from 'react';
import ReactDOM from 'react-dom';

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
import '/indexs/index_les.jsx';
import "/indexs/index_mes.jsx";
//?  Почему то не работает вместе с indexs. Перебивается ими
import App from './components/App.jsx';
ReactDOM.render(
	<App />,
	document.getElementById('root_4') ,
);

