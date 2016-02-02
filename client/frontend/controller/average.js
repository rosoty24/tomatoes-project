// PROFRESSIONAL USER AVRAGE
Template.details.helpers({
	countreivew:function(){
		var id = this._id;
		console.log("ID="+id);
		var result = review.find({id_product:id,type:"professional"}).count();
		console.log("Amount="+result);
		return result;
	},
	average:function(){     
		var id = this._id;
		var positive = review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
		if (positive=="") {
			return 0;
		}
		else{
			var countreview = review.find({id_product:id,type:"professional"}).count();
			var result = (Number(positive)/Number(countreview))*100;
			result = (result.toString()).replace(/(\d+)(\.)(.*)/gi,'$1');
			return result;
		}
		
	},
	average_rating:function(){
		var id = this._id;
		var sum = 0;
		console.log("ID="+id);
		var count = review.find({id_product:id,type:"professional"}).count();
		if ( count == "" || count == null ) {
			return 0;
		}
		else{
			var result = review.find({id_product:id,type:"professional"});
		result.forEach(function(item){
			sum = sum + item.score;
		});
		var total = Number(sum)/Number(count);
			total = (total.toString()).replace(/(\d+\.\d{2})(.*)/gi,'$1');
		console.log("SUM="+sum);
		return total;
		}	
	},
	positive:function(){
		var id = this._id;
		return review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
	},
	negative:function(){
		var id = this._id;
		return review.find({id_product:id,type:"professional",score:{$lt:3}}).count();
	},
	coloraverage:function(){
		var id = this._id;
		var positive = review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
		var countreview = review.find({id_product:id,type:"professional"}).count();
		var result = (Number(positive)/Number(countreview))*100;
		if(result<60){
			return "color-orange";
		}else{
			return "color-green";
		}
	}
});
// USER AVERAGE
Template.details.helpers({
	countreivew_user:function(){
		var id = this._id;
		console.log("ID="+id);
		var result = review.find({id_product:id,type:"user"}).count();
		console.log("Amount="+result);
		return result;
	},
	average_user:function(){
		var id = this._id;
		var positive = review.find({id_product:id,type:"user",score:{$gte:3}}).count();
		if ( positive == "" || positive == null) {
			return 0;
		}
		else{
			var countreview = review.find({id_product:id,type:"user"}).count();
			var result = (Number(positive)/Number(countreview))*100;
			return result;
		}
	},
	averageuser_rating:function(){
		var id = this._id;
		var sum = 0;
		console.log("ID="+id);
		var count = review.find({id_product:id,type:"user"}).count();
		if ( count == "" || count == null ) {
			return 0;
		}
		else{
			var result = review.find({id_product:id,type:"user"});
		result.forEach(function(item){
			sum = sum + item.score;
		});
		var total = Number(sum)/Number(count);
		console.log("SUM="+sum);
		return total;
		}
	},
	positive_user:function(){
		var id = this._id;
		return review.find({id_product:id,type:"user",score:{$gte:3}}).count();
	},
	negative_user:function(){
		var id = this._id;
		return review.find({id_product:id,type:"user",score:{$lt:3}}).count();
	},
	coloraverage_user:function(){
		var id = this._id;
		var positive = review.find({id_product:id,type:"user",score:{$gte:3}}).count();
		var countreview = review.find({id_product:id,type:"user"}).count();
		var result = (Number(positive)/Number(countreview))*100;
		if(result<60){
			return "color-orange";
		}else{
			return "color-green";
		}
	}
});
