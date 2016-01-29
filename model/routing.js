Router.configure({
	layoutTemplate: 'main'
});

Router.route('/', {
	template : 'tags'
});

Router.route('/:tag', {
	template : 'blogOfTag',
	data : function() {
		var currentTag = this.params.tag;
		return Tags.findOne({name : currentTag});
	}

});