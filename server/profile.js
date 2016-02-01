Meteor.methods({
	editprofileAuthor:function(id,firstname,lastname,about,hobbies,skills,avatar){
		var attr = {
			profile:{
				firstname:firstname,
				lastname:lastname,
				about:about,
				hobbies:hobbies,
				skills:skills,
				avatar:avatar
			}
		}
		return Meteor.users.update({_id:id},{$set:attr});
	}
});