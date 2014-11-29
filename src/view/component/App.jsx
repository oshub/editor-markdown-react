/** @jsx React.DOM */

var React = require('react');
var Navbar = require('./Navbar.jsx');
var Content = require('./Content.jsx');
var Modal = require('./Modal.jsx');

var App = React.createClass({
    render: function() {

        this.modal = <Modal />;
        console.log(this.modal);

        return (
        	<div className="app">
        		<header className="headerMain">
        			<Navbar />
        		</header>
        		<Content />
                {this.modal}
        	</div>
        );
    }
});

module.exports = App;