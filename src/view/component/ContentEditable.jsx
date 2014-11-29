/** @jsx React.DOM */

var React = require('react');

var ContentEditable = React.createClass({
	getInitialState: function() {
		return {
			content: this.props.content 
		};
	},
	change: function() {
		var content = this.refs.textarea.getDOMNode().value;

		if (this.props.onUp && content !== this.prevContent) {
			this.props.onUp(content);
		}

		this.prevContent = content;
		this.setState({content: content});
	},
	componentDidMount: function() {
		this.refs.textarea.getDOMNode().focus();
	},
	render: function() {
		return (
			<div className="contentEditable">
				<textarea 
				ref="textarea"
				defaultValue={this.state.content}
				onInput={this.change} 
				onBlur={this.change}
				></textarea>
			</div>
		);
	}
});

module.exports = ContentEditable;