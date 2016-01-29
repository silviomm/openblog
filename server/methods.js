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
		Tags.insert({
			name: nome
		})
	}
	
});