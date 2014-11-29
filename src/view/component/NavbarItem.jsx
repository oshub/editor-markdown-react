/** @jsx React.DOM */

var React = require('react');

var NavbarItem = React.createClass({
  render: function() {
    return (
		<li>{this.props.name}</li>
    );
  }
});

module.exports = NavbarItem;