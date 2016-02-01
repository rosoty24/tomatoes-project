Template.homefront.helpers({
	getAllproduct:function(){
		return products.find();
	},
	getFavorite:function(){
		//var id = Session.get("getProId");
		var id = this._id;
		return favorite.find({proId:id}).count();
	},
    getImage: function(image){
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    }
});

Template.homefront.events({
	'click .like':function(e){
		e.preventDefault();
		var id = this._id;
        var user = Meteor.userId();
        //alert("This is my like:"+id);
        var obj={
            proId:id,
            userId:user
         }
         if(!user){
            alert("Login First Before Like");
            Router.go("/login");
         }else{
            Meteor.call("insertFavorite",obj,function(error){
                if(error){console.log("ERROR INSERT FAVORITE"+error.reason())}
                else{
                    $("#like_"+id).addClass("hidden");
                    $("#unlike_"+id).removeClass("hidden");
                }
            });	
        }
	},
	'click .unlike':function(e){
		e.preventDefault(); 
		var id=this._id;
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        Meteor.call("deleteFavorite",id,obj,function(error){
            if(error){console.log("ERROR DELETE FAVORITE"+error.reason())}
            else{
                $('#unlike_'+id).addClass('hidden');
                $('#like_'+id).removeClass('hidden');
            }
        });
	}
});