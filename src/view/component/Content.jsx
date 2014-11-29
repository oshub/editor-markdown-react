/** @jsx React.DOM */

var React = require('react');
var ContentEditable = require('./ContentEditable.jsx');
var ContentPreview = require('./ContentPreview.jsx');

var Content = React.createClass({
	getInitialState: function() {
		return {
			content: "" 
		};
	},
	updateContent: function(content) {
		this.setState({content: content});
	},
	fireDidMount: function() {
		if (this.contentEditable && this.props.didMount) {
			this.props.didMount({
				contentEditable: this.contentEditable
			});
		}
	},
	editableDidMount: function(refs) {
		this.contentEditable = refs.contentEditable;
		this.fireDidMount();
	},
	previewDidMount: function(refs) {
		this.contentPreview = refs.contentPreview;
		this.fireDidMount();
	},
	render: function() {

		var contentEditable = {
			content: this.state.content,
			onUp: this.updateContent,
			didMount: this.editableDidMount,
			keyUp: this.props.keyUp
		};

		var contentPreview = {
			content: this.state.content,
			didMount: this.previewDidMount
		}

		return (
			<div className="content">
				<ContentEditable {...contentEditable}/>
				<ContentPreview {...contentPreview} />
			</div>
		);
	}
});

module.exports = Content;