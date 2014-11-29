/** @jsx React.DOM */

var React = require('react');

var NavbarItem = React.createClass({
  render: function() {

  	var className = (this.props.right) ? 'navbarItem right' : 'navbarItem';

    return (
		<li className={className}>
			<button>
				{this.props.name}
			</button>
		</li>
    );
  }
});

module.exports = NavbarItem;