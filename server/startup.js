Meteor.startup(function() {
	
	Meteor.publish("blogs", function() {
		return Blogs.find({});
	});

});