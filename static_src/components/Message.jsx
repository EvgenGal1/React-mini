import React from 'react';
import PropTypes from 'prop-types';

// 13.
export default class Message extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	};
	render() {
		return <div> {this.props.text} </div>
	}
}