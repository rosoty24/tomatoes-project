Meteor.methods({
	updateComment:function(id,object){
		data.update({_id:id},{$addToSet:{comments:object}});
	},
  	djibu:function(pro_name,image, category,pyramid,accords,ratings,longevity,sillage,peoplevote,recommend){
        var timestamp = new Date().getTime();
        var obj = {
            product_name:pro_name,
            image:image,
            category:category,
            perfume_pyramid:pyramid,
            accords:accords,
            ratings:ratings,
            Longevity:longevity,
            Sillage:sillage,
            peoplevote:peoplevote,
            recommend:recommend,
            date:timestamp,
            status:0
        }
    	data.insert(obj);
  	},
    updateTomatoes:function(id,pro_name,image, category,pyramid,accords,ratings,longevity,sillage,peoplevote,recommend){
        var timestamp = new Date().getTime();
        var obj = {
            product_name:pro_name,
            image:image,
            category:category,
            perfume_pyramid:pyramid,
            accords:accords,
            ratings:ratings,
            Longevity:longevity,
            Sillage:sillage,
            peoplevote:peoplevote,
            recommend:recommend,
            date:timestamp,
            status:0
        }
        data.update({_id:id},{$set:obj});
    }
});
