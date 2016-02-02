Session.set("CURRENT-DETAILS","");
Template.disProduct.helpers({
    displayPro:function(){
        var id = this._id;
        console.log("CATID="+id);
        return products.find({category:id});
    },
    getImage: function(image){
        //var id = this.imgId;
        //console.log('MyimageId:' + id);
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    },
    getFavorite:function(id){
        //var id = this._id;
        return favorite.find({proId:id}).count();
    }
});
Template.disProduct.events({
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
Template.details.helpers({
    getProductRelated:function(){
        var current = Router.current().route.path(this);
        Session.set("CURRENT-DETAILS",current);
        var id = this._id;
        var catId =this.category;
        //var myLimit = limit || 5;
        return data.find({$and:[{category:catId},{_id:{$ne:id}}]});
    },
    getUserComment:function(userId){
        var result = users.findOne({_id:userId});
        return result.profile.firstname;
    },
    getProfile: function(image){
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return false;
        }
    },
    checkTime:function(time){
        //var date = new Date(time).toString("yy-mm-dd");
        var timestamp = new Date(time);
        var day = timestamp.getDate();
        var month = timestamp.getMonth();
        var year = timestamp.getFullYear();
        return day+"-"+month+"-"+year;
    },
    Review_professional:function(time){
        var id = this._id;
        return review.find({id_product:id,type:"professional"},{limit:6});
    },
    Review_user:function(){
        var id = this._id;
        return review.find({id_product:id,type:"user"},{limit:6});
    },
    getTimeFormat:function(time){
       var timestamp = time,
        date = new Date(timestamp * 1000),
    datevalues = {
           year:date.getYear(),
           month:date.getMonth()+1,
           day:date.getDate(),
           hour:date.getHours(),
           Mn:date.getMinutes(),
           sn:date.getSeconds(),
        };
        console.log(datevalues.day+"/"+datevalues.month+"/"+datevalues.year); 
        return datevalues.day+"/"+datevalues.month+"/"+datevalues.year;
        }
});

Template.details.events({
     "click #add-review": function(e,tlp){
        e.preventDefault();
        var user = Meteor.userId();
        var today = new Date();
        var date = today.getDate();
        var text = tlp.$('#review').val();
        var author = Meteor.userId();
        var productId = this._id;
        var score = Session.get("SCORE");
        var url = "";
        var websiteName = "";
        //alert("GEt DATA Revew "+text+" "+userId+" "+score+" "+productId);
        var object={
                text        :text,   
                author      :author,
                date        :date,
                id_product   :productId,
                type         : "user",
                score       :Number(score),
                url         : url,
                websiteName : websiteName
        }
        if(!user){
            alert("Login First Before Comment");
            Router.go("/login");
         }else if(confirm('Are you sure you want to insert???') || userId){
             Meteor.call('insertReview',object,function(error){
                if(error){console.log("ERROR"+error.reason())}
                else{
                    console.log("SUCCESS");
                    $("#review").val("");
                }
            });
        }
        
    },
    "click i.fa-3x":function(e){
        e.preventDefault();
        var userId = Meteor.userId();
        var star= $(e.currentTarget).attr("class");
        var score= $(e.currentTarget).attr("value");
        //alert("star: "+score);
        if(star.match("fa-star-o")){
            $(e.currentTarget).removeClass("fa-star-o");
            $(e.currentTarget).prevAll(".fa-3x").removeClass("fa-star-o");
            $(e.currentTarget).prevAll(".fa-3x").addClass("fa-star");
            $(e.currentTarget).addClass("fa-star");
        }else{
            $(e.currentTarget).nextAll(".fa-3x").addClass("fa-star-o");
            $(e.currentTarget).nextAll(".fa-3x").removeClass("fa-star");
        }
        Session.set("SCORE",score);
    }
});



Template.perfumeDetail.helpers({
    getIcon:function(feel){
        console.log("MY FEELING IS "+feel);
        if ( feel == "love" ) 
            return "/images/img1.png";
        else if ( feel == "like" ) 
            return "/images/img2.png";
        else if ( feel == "dislike" ) 
            return "/images/img3.png";
        else if ( feel == "winter" )
            return "/images/img4.png";
        else if ( feel == "spring" )
            return "/images/img5.png";
        else if ( feel == "summer" )
            return "/images/img6.png";
        else if ( feel == "fall" )
            return "/images/img7.png";
        else if ( feel == "day" )
            return "/images/img8.png";
        else if ( feel == "night" )
            return "/images/img9.png";
    },
    getFeelColor:function(color){
        if ( color == "love" ) 
            return "progress-bar";
        else if ( color == "like" ) 
            return "progress-bar-a";
        else if ( color == "dislike" ) 
            return "progress-bar-b";
        else if ( color == "winter" )
            return "progress-bar-c";
        else if ( color == "spring" )
            return "progress-bar-e";
        else if ( color == "summer" )
            return "progress-bar-f";
        else if ( color == "fall" )
            return "progress-bar-g";
        else if ( color == "day" )
            return "progress-bar-h";
        else if ( color == "night" )
            return "progress-bar-i";
    }
});
Template.Allprofessional.helpers({
    getReview:function(){
        var id = this._id;
        console.log("PROID="+id);
        return review.find({id_product:id,type:"professional"});
    },
    getUserReview:function(author){
        var result = users.findOne({_id:author});
        if(result == "undefined")
            return author;
        else
            return result.profile.firstname;
    }
});
Template.Allreviewuser.helpers({
    getuserReview:function(){
        var id = this._id;
        console.log("PROID="+id);
        return review.find({id_product:id,type:"user"});
    },
    getUsernameReview:function(author){
        var result = users.findOne({_id:author});
        if(result == "undefined")
            return author;
        else
            return result.profile.firstname;
    }
});


