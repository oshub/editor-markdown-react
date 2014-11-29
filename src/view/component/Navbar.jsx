/** @jsx React.DOM */

var React = require('react');
var NavbarItem = require('./NavbarItem.jsx');
var configNavbar = require('../../config/navbar');

var Navbar = React.createClass({
  render: function() {

  	var menu = configNavbar.map(function(objeto){
  		return <NavbarItem {...objeto}/>
  	});

    return (
		<nav className="navbar">
			<ul className="navbarWrap">
				{menu}
			</ul>
		</nav>
    );
  }
});

module.exports = Navbar;