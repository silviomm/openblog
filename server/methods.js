Meteor.methods({
	
	adiciona : function(title, body){
		Blogs.insert({
			title: title,
			body: body
		})
	},

	remove : function(id) {
		Blogs.remove({_id : id});
	}
	
});