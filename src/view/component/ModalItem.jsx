/** @jsx React.DOM */

var React = require('react');

var ModalItem = React.createClass({
	handle: function() {
		if (this.props.action) {
			this.props.action();
		}
	},
	render: function() {
		return (
			<button className="modalItem" onClick={this.handle}>
				{this.props.label}
			</button>
		);
	}
});

module.exports = ModalItem;<button></button>