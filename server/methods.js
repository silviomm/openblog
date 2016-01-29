Meteor.methods({
	
	adicionaBlog : function(title, body){
		Blogs.insert({
			title: title,
			body: body
		})
	},

	removeBlog : function(id) {
		Blogs.remove({_id : id});
	},

	adicionaTag : function(nome) {
		var count = Tags.find({name : nome}).count();
		if(count == 0)
			Tags.insert({
				name: nome
			})
	}
	
});