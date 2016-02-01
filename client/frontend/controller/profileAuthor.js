Template.profileAuthor.helpers({
	getprofile:function(avatar){
		console.log("USERID="+avatar);
		var img = images.findOne({_id:avatar});
        if(img){
            //console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return "default_avatar.jpg";
        }
	},
    checkEditprofile:function(id){
        var user = Meteor.userId();
        //var result = Meteor.users.findOne({_id:user});
        if(user == id)
            return true;
        else
            return false;
    },
    currentPost:function(){
        var user = this._id;
        return post.find({author:user});
    },
    getAuthorname:function(author){
        console.log("AUTHOR="+author);
        var result = Meteor.users.findOne({_id:author});
        return result.profile.firstname+" "+result.profile.lastname;
    },
    getCategory:function(){
        var id = this.category;
        return category.findOne({_id:id}).title;
    }
});
Template.editprofileAuthor.events({
	'click #updateAuthor': function(event){
        event.preventDefault();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var about = $('#about').val();
        var hobbies = $('#hobbies').val();
        var skills = $('#skills').val();
        var avatar = Session.get('ADDIMAGEID');
        var id = Meteor.userId();
        alert(firstname+lastname+about+hobbies+skills);
       	Meteor.call("editprofileAuthor",id,firstname,lastname,about,hobbies,skills,avatar,function(error){
       		if(error){console.log(error.reason())}
       		else{
       			console.log("UPDATE SUSCESS");
       			Router.go("/profileAuthor/"+Meteor.userId());
       		}
       	});
    },
    'change #upload': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});
Template.editprofileAuthor.helpers({
	getprofile:function(){
		var avatar = Session.get('ADDIMAGEID');
		var img = images.findOne({_id:avatar});
        if(img){
            //console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
             return "default_avatar.jpg";
        }
	}
});
