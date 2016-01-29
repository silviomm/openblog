if(Meteor.isClient){
	
	Meteor.subscribe('tags');

	Template.tags.events({

		'submit #tagForm' : function(e) {
			e.preventDefault();
			var nomeTag = $('#tagName').val();
			$('#tagName').val('');

			Meteor.call('adicionaTag', nomeTag);
		}
	
	});

	Template.tags.tags = function(){
		return Tags.find({}, {sort: {name: 1}});
	};

}
