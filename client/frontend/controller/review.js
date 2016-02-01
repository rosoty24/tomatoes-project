Template.Allreviewuser.helpers({
	getAlluserreview:function(){
		var id = this._id;
		return review.find({id_product:id,type:"user"});
	}
});