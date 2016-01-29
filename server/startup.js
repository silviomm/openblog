Meteor.startup(function() {
	
	Meteor.publish("blogs", function() {
		return Blogs.find({});
	});


	Meteor.publish("tags", function() {
		return Tags.find({});
	});

});