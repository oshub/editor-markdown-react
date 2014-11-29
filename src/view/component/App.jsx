/** @jsx React.DOM */

var React = require('react');
var Navbar = require('./Navbar.jsx');

var App = React.createClass({
  render: function() {
    return (
    	<Navbar />
    );
  }
});

module.exports = App;