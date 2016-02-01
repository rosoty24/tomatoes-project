Meteor.methods({
	updatePro: function(id,object) {
		products.update({_id:id},{$addToSet: object});
	},
	updatePostCom: function(id,obj) {
		products.update({_id:id},{$set:{comments:obj}});
	}
});