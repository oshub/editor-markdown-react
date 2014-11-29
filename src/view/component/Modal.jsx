/** @jsx React.DOM */

var React = require('react');
var ModalItem = require('./ModalItem.jsx');

var Modal = React.createClass({
	getInitialState: function() {
		return {
			open: this.props.open 
		};
	},
	componentDidMount: function() {
		// Dropbox.choose({});
	},
	newFile: function() {
		if (this.props.onNewFile) {
			this.props.onNewFile();
		}
		this.setState({open: false});
	},

	render: function() {
		var modalState = this.state.open ? 'modal open' : 'modal';
		var backDropState = this.state.open ? 'backDrop open' : 'backDrop';
		return (
			<div className={backDropState}>
				<div className={modalState}>
					<ModalItem label="New File" action={this.newFile} />
					<ModalItem label="Open Dropbox" />
				</div>
			</div>
		);
	}
});

module.exports = Modal;