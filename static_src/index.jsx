import React from 'react';
import ReactDOM from 'react-dom';

//?  Почему то не работает вместе с App. Перебивают его
// import '/indexs/index_les.jsx';
// import "/indexs/index_mes.jsx";
//?  Почему то не работает вместе с indexs. Перебивается ими
import App from './components/App.jsx';
ReactDOM.render(
	<App />,
	document.getElementById('root_4') ,
);

