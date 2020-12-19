import React from 'react';
import PropTypes from 'prop-types';

// 2.13
export default class Message extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		// 3.5.2
		sender: PropTypes.string.isRequired,
	};
	render() {
		// // 2.13
		// return <div> {this.props.text} </div>
		// 3.5.2
		return <div
			className="message"
			style={{ alignSelf: this.props.sender === 'me' ? 'flex-start' : 'flex-end' }}
		>
			<div>{this.props.text}</div>
			<div className="message-sender">{this.props.sender}</div>
		</div>
	}
}
