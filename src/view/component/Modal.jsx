/** @jsx React.DOM */

var React = require('react');

var Modal = React.createClass({
	open: function() {
		console.log('abrindo modal');
	},
	componentDidMount: function() {
		// Dropbox.choose({});
	},
	render: function() {
		return (
			<div className="modal">

			</div>
		);
	}
});

module.exports = Modal;