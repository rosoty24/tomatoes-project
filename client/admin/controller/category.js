Template.categories.events({
	'click #submit': function(e){
		e.preventDefault();
		var title = $('#title').val();
		var img = Session.get('ADDIMAGEID');
		//alert("Image "+img);
		var obj={
			title:title,
			image:img
		}
		Meteor.call("addCat", obj, function(err){
			if(err){
				console.log(err);
			}else{
				alert("success");
				Router.go("/admin/manageCategory");
			}
		});
	},
	'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }

});
Template.manageCategory.helpers({
	manageCat: function(){
		//alert();
		return category.find({});
	},
	catName: function(cat){
		if(cat=='0')
			return;
		var result = category.findOne({_id:cat});
		return result.title;
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
    }
});

Template.manageCategory.events({
	'click #remove': function(e){
		e.preventDefault();
		var id = this._id;
		Meteor.call('deleteCategory', id);
		
	}
});

Template.updateCategory.helpers({
	getCat: function(cat){
		var cats = category.findOne({_id:cat});
		Session.set('data',cats.title);
		return cats.title;
	},
	checkParent:function(catId,realParent){
		console.log(catId+"=="+realParent.parent);
		return catId==realParent.parent;
	},
	getCatall: function(){
		return category.find({});
	}
});	

Template.updateCategory.events({
	"click #btnUpdate": function(e) {
		e.preventDefault();
		var id = this._id;
		var title = $('#title').val();
		var image = $('#image').val();

		var attr={
			title:title,
			image:image
		
		}

		Meteor.call('updateCat',id, attr);
		Router.go('/admin/manageCategory');   
	}
});

