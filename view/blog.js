if(Meteor.isClient){

	Meteor.subscribe('blogs');

	Template.blog.events({

		'submit #blogForm' : function(event){

			event.preventDefault();
			var title = $("#title").val();
			var body = $("#body").val();
			$("#title").val();
			$("#body").val();

			Meteor.call('addBlog', title, body);
		}
	});

	Template.blog.blogs = function(){
		return Blogs.find({}).fetch().reverse();
	}

}