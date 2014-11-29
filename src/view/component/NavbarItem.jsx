/** @jsx React.DOM */

var React = require('react');

var NavbarItem = React.createClass({
  render: function() {
    return (
		<li className="navbarItem">{this.props.name}</li>
    );
  }
});

module.exports = NavbarItem;