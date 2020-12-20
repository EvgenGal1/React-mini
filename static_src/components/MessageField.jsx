import React from 'react';
import Message from './Message';
import '../styles/styles.css';

// import { TextField, FloatingActionButton } from 'material-ui';
// import SendIcon from 'material-ui/svg-icons/content/send';

// 2.13.1
export default class MessageField extends React.Component {

	// 3.6.1
	constructor(props) {
		super(props);
		// создадим ref в поле `textInput` для хранения DOM-элемента
		this.textInput = React.createRef();
	}

	// 2.13.1
	state = {
		// // 2.13.1
		// messages: ["Привет!", "Как дела?"]
		// 3
		messages: [
			{ text: "Привет!", sender: 'bot' },
			{ text: "Ку!", sender: 'me' },
			{ text: "Как дела?", sender: 'bot' }],
		// 3.4
		input: '',
	};

	// 3.6.1
	// Ставим фокус на <input> при монтировании компонента
	componentDidMount() {
		this.textInput.current.focus();
	}

	// 2.14
	componentDidUpdate() {
		// // 2.14.1
		// if (this.state.messages.length % 2 === 1) { // Остаток от деления на 2
		// 3.1
		if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
			// 2.14
			setTimeout(() =>
				this.setState({
					// // 2.14
					// { messages: [... this.state.messages, 'Не приставай ко мне, я робот!'] }),
					// 3.1
					messages: [... this.state.messages,
					{ text: 'Не приставай ко мне, я робот!', sender: 'bot' }]
				}), 700);
		}
	}
	// 3.4
	handleClick = (message) => {
		this.sendMessage(message)
	};
	// 3.4
	handleChange = (event) => {
		// // 3.4
		// this.setState({ input: event.target.value });
		// 3.5.1
		this.setState({ [event.target.name]: event.target.value });
	};
	// 3.4
	handleKeyUp = (event, message) => {
		if (event.keyCode === 13) { // Enter
			this.sendMessage(message)
		}
	};
	// 3.4
	sendMessage = (message) => {
		this.setState({
			messages: [... this.state.messages, {
				text: message,
				sender: 'me'
			}],
			// 3.5
			input: '',
		});
	};

	// // 2.13.1
	// handleClick = () => {
	// 	this.setState({
	// messages: [... this.state.messages, 'Нормально'] });
	// // 3.1
	// messages: [... this.state.messages, { text: 'Нормально', sender: 'me' }] });
	// // 3.6.1
	// handleClick = (message) => {
	// 	this.setState({
	// 		messages: [... this.state.messages, { text: message, sender: 'me' }]
	// 	});
	// };

	// // 3.6.2
	// handleChange = (event) => {
	// 	console.log(event.target.value);
	// };

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
		// return <div style={{backgroundColor: 'lightblue'}} >
		// { messageElements }
		// <button onClick={this.handleClick} > Отправить сообщение </button>
		// </div >
		// 3.5.1
		return <div className="layout">
			<div className="message-field">
				{messageElements}
			</div >

			{/* // 3.7.2
			<div style={{ width: '100%', display: 'flex' }} >
				<TextField
					name="input"
					fullWidth={true}
					hintText="Введите сообщение"
					style={{ fontSize: '22px' }}
					onChange={this.handleChange}
					value={this.state.input}
					onKeyUp={(event) => this.handleKeyUp(event,
						this.state.input)}
				/>
				<FloatingActionButton onClick={() =>
					this.handleClick(this.state.input)} >
					<SendIcon />
				</FloatingActionButton>
			</div> */}


			{/* // 3.4  */}
			<input
				// 3.6.1
				ref={this.textInput}
				// 3.5.1
				name="input"
				// 3.5
				value={this.state.input}
				// 3.4
				style={{ fontSize: '22px' }}
				onChange={this.handleChange}
				onKeyUp={(event) => this.handleKeyUp(event, this.state.input)} />
			{/* // // 2.13.1
			<button onClick={this.handleClick}>Отправить сообщение</button> */}
			{/* // // 3.6.1
			<button onClick={() => this.handleClick('Нормально')}>Отправить сообщение</button> */}
			{/* // 3.4  */}
			<button
				style={{ fontSize: '22px' }}
				onClick={() => this.handleClick(this.state.input)}>Отправить сообщение</button>
		</div >
	}

}