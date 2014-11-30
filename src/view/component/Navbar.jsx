/** @jsx React.DOM */

var React = require('react');
var NavbarItem = require('./NavbarItem.jsx');
var configNavbar = require('../../config/navbar');

var Navbar = React.createClass({
  handle: function(index) {
    if (configNavbar[index].action) {
      configNavbar[index].action(this.props.contentEditable);
    }
  },
  render: function() {

    var self = this;

  	var menu = configNavbar.map(function(objeto, i){
  		return <NavbarItem {...objeto} index={i} click={self.handle} />
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