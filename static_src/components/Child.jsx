import React from 'react';
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
		return (
			<h1> Это компонент Child </h1>
		)
	}
}