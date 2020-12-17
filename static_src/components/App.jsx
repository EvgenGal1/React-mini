import React from 'react';
// import ReactDOM from "react-dom";
// 2.. импорт компонента Child
import Child from './Child.jsx';

// 2. Используется export default вместо просто export. Продолжение в index.jsx....
export default class App extends React.Component {
	state = {
		text: 'Наш первый React-компонент',
		// 2.. После Child.jsx
		counter: 0,

	};

	// 2.7 хуки. перед отрисовкой
	componentWillMount() {
		console.log('componentWillMount');
	}
	// 2.7 хуки. после первой отрисовки
	componentDidMount() {
		console.log('componentDidMount');
		// 2.7 state переносим из render в componentDidMount
		setTimeout(() => this.setState({ 'text': 'Обновленный React-компонент' }),
			1000);
	}
	// 2.7 хуки. после обновления и отрисовки
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	// 2.9 После Child.jsx
	// Стрелочная ф-ия для использ контеста компонента
	handleClick = () => {
		this.setState({ 'counter': this.state.counter + 1 })
	};

	// 2.2 В классе компонента обязательно должна быть реализована функция render(). 
	// То, что возвращает эта функция, как раз и выводится на экран.
	render() {
		// 2. после хуков
		console.log('render');
		// 2.5 до хуков
		// setTimeout(() => this.setState({ 'text': 'Обновленный React-компонент' }), 1000);
		return (
			// 2.3 До Child.jsx
			// <h1>{this.state.text}</h1>
			// 2.9 После Child.jsx
			<div>
				<h1>{this.state.text}</h1>
				<Child counter={this.state.counter} />
				<button onClick={this.handleClick}>+1</button>
			</div>
		)
	}
}


