import React from 'react';
import PropTypes from 'prop-types';

// 2.8
export default class Child extends React.Component {
	// 2.12 Для контроля типов передаваемых в компонент props’ ов можно использовать стороннюю библиотеку PropTypes
	static propTypes = {
		counter: PropTypes.number,
	};
	//? 2.12.1 ХЗ ВООБЩЕ ЧТО И КАК?
	defaultProps = {
		counter: 0,
	};
	// 2.8 хуки. перед отрисовкой
	componentWillMount() {
		console.log('Child componentWillMount');
	}
	componentDidMount() {
		console.log('Child componentDidMount');
	}
	componentDidUpdate() {
		console.log('Child componentDidUpdate');
	}
	render() {
		console.log('Child render');
		// 2.8 до props
		// return (
		// 	<h1>Это компонент Child</h1>
		// )
		// 2.11 Получаем переданый props (в виде счетчик)
		return (
			<h1>Это компонент Child, counter: { this.props.counter}</h1>
		)
	}
}