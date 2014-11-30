module.exports = [
	{
		name: 'Bold'
	},
	{
		name: 'Italic'
	},
	{
		name: 'Hyperlink'
	},
	{
		name: 'Blockquote'
	},
	{
		name: 'Save',
		right: true,
		action: function(content){
			console.log(content.getDOMNode().value);
		}
	},
	{
		name: 'New File',
		right: true
	}
];