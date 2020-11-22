import React from 'react';

// 2.
export default class Child extends React.Component {
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
		// 2. до props
		// return (
		// 	<h1>Это компонент Child</h1>
		// )
		// 2. Получаем переданый props
		return (
			<h1>Это компонент Child, counter: { this.props.counter}</h1>
		)
	}
}