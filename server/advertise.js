Meteor.methods({
	addAdvertise: function(image, url) {
		var attr={
			image:image,
			url:url
		}

		advertise.insert(attr);
		console.log("Inserted");
	},
	updateAdvertise: function(id,attr) {
		advertise.update({_id:id},{$set: attr});
	},
	deleteAdvertise: function(id){
		advertise.remove(id);
	}
});