Template.home.helpers({
	getAllProduct:function(){
		return data.find({},{limit:6});
	},
    getCatname:function(cat){
        return category.findOne({_id:cat}).title;
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

