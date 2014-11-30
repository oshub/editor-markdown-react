/** @jsx React.DOM */

var React = require('react');

var NavbarItem = React.createClass({
	handle: function() {
		if (this.props.click) {
			this.props.click(this.props.index);
		}
	},
	render: function() {

		var className = (this.props.right) ? 'navbarItem right' : 'navbarItem';

		return (
			<li className={className}>
				<button onClick={this.handle}>
					{this.props.name}
				</button>
			</li>
		);
	}
});

module.exports = NavbarItem;