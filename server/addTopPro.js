Meteor.methods({
	insert:function(pro,obj){
		data.update({_id:pro},{$set:obj});
	},
	deleteStatuds: function (id) {
      return data.update( {_id:id} , {$set: {status:0} } );
   }
});