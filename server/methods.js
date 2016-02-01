Meteor.methods({
	
	addBlog : function(title, body){
		Blogs.insert({
			title: title,
			body: body
		})
	},

	removeBlog : function(id) {
		Blogs.remove({_id : id});
	},

	addTag : function(nome) {
		var count = Tags.find({name : nome}).count();
		if(count == 0)
			Tags.insert({
				name: nome
			})
	}
	
});