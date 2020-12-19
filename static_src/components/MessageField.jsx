import React from 'react';
import Message from './Message';
import '../styles/styles.css';

// 2.13.1
export default class MessageField extends React.Component {
	state = {
		// // 2.13.1
		// messages: ["Привет!", "Как дела?"]
		// 3
		messages: [
			{ text: "Привет!", sender: 'bot' },
			{ text: "Ку!", sender: 'me' },
			{ text: "Как дела?", sender: 'bot' }],
	};
	// 2.14
	componentDidUpdate() {
		// // 2.14.1
		// if (this.state.messages.length % 2 === 1) { // Остаток от деления на 2
		// 3
		if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
			// 2.14
			setTimeout(() =>
				this.setState({
					// // 2.14
					// { messages: [... this.state.messages, 'Не приставай ко мне, я робот!'] }),
					// 3
					messages: [... this.state.messages,
					{ text: 'Не приставай ко мне, я робот!', sender: 'bot' }]
				}), 700);
		}
	}
	// 2.13.1
	handleClick = () => {
		this.setState({
			// // 2.13.1
			// messages: [... this.state.messages, 'Нормально'] });
			// 3
			messages: [... this.state.messages,
			{ text: 'Нормально', sender: 'me' }]
		});
	};
	// 2.13.1
	render() {
		// // 2.13.1
		// const messageElements = this.state.messages.map((text, index) => (
		// 	<Message text={message.text} sender={message.sender} key={index} />));
		// 3.1
		const messageElements = this.state.messages.map((message, index) => (
			<Message text={message.text} sender={message.sender} key={index} />));
		// // 2.13.1
		// return <div>
		// ...
		// // 3.2.1
		// return <div id='main' className='message-field'>
		// ...
		// // 3.4
		// return <div style={{ backgroundColor: 'lightblue' }} >
		// { messageElements }
		// <button onClick={this.handleClick} > Отправить сообщение </button>
		// </div >
		// 3.5.1
		return <div className="layout">
			<div className="message-field">
				{messageElements}
			</div >
			<button onClick={this.handleClick}>Отправить сообщение</button>
		</div >
	}
}