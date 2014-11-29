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
		if (this.props.didMount) {
			this.props.didMount({
				contentEditable: this.refs.textarea
			});
		}
	},
	onKeyUp: function(e) {
		if (this.props.keyUp) {
			this.props.keyUp(e);
		}
	},
	render: function() {

		var textarea = {
			ref: "textarea",
			defaultValue: this.state.content,
			onInput: this.change,
			onBlur: this.change,
			onKeyUp: this.onKeyUp
		};

		return (
			<div className="contentEditable">
				<textarea {...textarea} ></textarea>
			</div>
		);
	}
});

module.exports = ContentEditable;