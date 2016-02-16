Router.configure({
	layoutTemplate: 'main'
});

Router.route('/', {
	template : 'index'
});

Router.route('/:tag', {
	template : 'blog',
	data : function() {
		var currentTag = this.params.tag;
		return Tags.findOne({name : currentTag});
	}

});