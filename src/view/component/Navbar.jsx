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
		<header>
			<nav>
				<ul>
					{menu}
				</ul>
			</nav>
		</header>
    );
  }
});

module.exports = Navbar;