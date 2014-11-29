/** @jsx React.DOM */

var React = require('react');
var Navbar = require('./Navbar.jsx');
var Content = require('./Content.jsx');
var Modal = require('./Modal.jsx');

var App = React.createClass({

    getInitialState: function() {
        return {
            modalOpen: true 
        };
    },
    contentDidMount: function(refs) {
        this.contentEditable = refs.contentEditable;
    },
    componentDidMount: function() {

    },  
    render: function() {

        var modalProps = {
            onNewFile: function() {
                this.contentEditable.getDOMNode().focus();
            }.bind(this),
            open: this.state.modalOpen
        };

        var contentProps = {
            didMount: this.contentDidMount
        };

        return (
        	<div className="app">
        		<header className="headerMain">
        			<Navbar />
        		</header>
        		<Content {...contentProps} />
                <Modal {...modalProps} />
        	</div>
        );
    }
});

module.exports = App;