Meteor.methods({
	insertReview: function(obj) {
  		review.insert(obj);
  	},
  	deleteReview: function (id) {
      review.remove({_id:id});
   },
  	UpdateReview:function(id,obj){
  		review.update({_id:id},{$set:obj});
  	}
});