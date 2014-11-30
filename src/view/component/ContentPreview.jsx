/** @jsx React.DOM */

var React = require('react');

var converter = new Showdown.converter();

var ContentPreview = React.createClass({
  render: function() {

    return (
		<div className="contentPreview" 
			dangerouslySetInnerHTML={{__html: converter.makeHtml(this.props.content)}}>
		</div>
    );
  }
});

module.exports = ContentPreview;