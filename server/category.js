Meteor.methods({
	addCat: function(obj) {
		category.insert(obj);
		//console.log("Inserted");
	},
	updateCat: function(id,attr) {
		category.update({_id:id},{$set: attr});
	},
	deleteCategory: function(id){
		category.remove(id);
	}
});