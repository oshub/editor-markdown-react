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
	render: function() {
		return (
			<div className="content">
				<ContentEditable content={this.state.content} onUp={this.updateContent} />
				<ContentPreview content={this.state.content} />
			</div>
		);
	}
});

module.exports = Content;