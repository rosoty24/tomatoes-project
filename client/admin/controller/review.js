Template.managereview.events({
	"click #btnreview":function(e,tlp){
	},
	"click #remove":function(e){
		e.preventDefault();
		var id = this._id;
		if (confirm('Are you sure you want to Remove this?')) {
			Meteor.call("deleteReview",id,function(error){
				if(error){
					console.log("deleteReview error"+error.reason());
				}else{
					console.log("deleteReview success");

				}
			});
		}
	}
});
Template.managereview.helpers({
	getAllReview:function(){
		return review.find();
	}
});
Template.updateReview.events({
	"submit form":function(e,tlp){
		e.preventDefault();
		var id = this._id;
		var text = $("#text").val();
		var author = $("#author").val();
		var image = Session.get("IMAGE");
		var today = new Date();
		var	date  = today.getTime();
		var id_product = "1234567";
		var type = $("#type").val();
		var score = $("#score").val();
		var url = $("#url").val();
		var websiteName = $("#websitename").val();
		var new_obj = {
			text:text,
			author:author,
			image:image,
			date:date,
			id_product:id_product,
			type:type,
			score:Number(score),
			url:url,
			websiteName:websiteName
		}
		Meteor.call("UpdateReview",id,new_obj,function(error){
			if(error){
				console.log("upate review error"+error.reason());
			}else{
				console.log("update review success");
				Router.go("/admin/addreview");
			}
		});
	}
});
Template.addreview.helpers({
	getProduct:function(){
		return data.find({});
	}	
});
Template.addreview.events({
	"submit form":function(e){
		e.preventDefault();
		var text = $("#text").val();
		var author = $("#author").val();
		var image = Session.get("IMAGE");
		var today = new Date();
		var	date  = today.getTime();
		var id_product = $("#productId").val();
		var type = $("#type").val();
		var score = $("#score").val();
		var url = $("#url").val();
		var websiteName = $("#websitename").val();
		var new_obj = {
			text:text,
			author:author,
			image:image,
			date:date,
			id_product:id_product,
			type:type,
			score:Number(score),
			url:url,
			websiteName:websiteName
		}
		Meteor.call("insertReview",new_obj,function(error){
			if(error){
				console.log("upate review error"+error.reason());
			}else{
				console.log("update review success");
				Router.go("/admin/managereview");
			}
		});
	}
});
