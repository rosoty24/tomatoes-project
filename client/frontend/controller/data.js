Template.data.helpers({
	getdata:function(){
		return data.find({});
	}
    
});
Template.home.helpers({
	getData:function(){
		return data.findOne({_id:"56a5928a5c991408893df687"});
	},
    firstImage:function(){
        return data.findOne({_id:"f0ed6244e42596f56a59945c"});
    },
    secondImage:function(){
        return data.findOne({_id:"56a59945cf0ed6244e42596f"});
    },
    // getData:function(){
    //     var arr=[];
    //     var query=6;
    //     var array=[];
    //     var nunberPage=Session.get('next');
    //     if(nunberPage){
    //       query=nunberPage*6;  
    //     }
        
    //     var items = data.find({},{limit:query});  
    //     //alert('itmes='+JSON.stringify(items));
        
    //     items.forEach(function(value){
    //         var obj={
    //             _id             : value._id,
    //             name            : value.name,
    //             image           : value.image,
    //             category        : value.category,
    //             perfume_pyramid :value.perfume_pyramid,
    //             accords         : value.accords,
    //             ratings         :value.ratings,
    //             peoplevote      :value.peoplevote,
    //             id_product      : value.id_product,
    //             Longevity       :value.Longevity,
    //             Sillage         : value.Sillage
    //         }
    //         arr.push(obj);
    //     });
    //     //alert('itmes='+JSON.stringify(arr));
    //     if(query<12){
    //         var start=0;
    //     }else{
    //         var start=query-6;
    //     }
    //     for(var i=start;i<query;i++){
    //         if(arr[i]){
    //             array.push(arr[i]);
    //         }
           
    //     }
    //     console.log('datapaginatoin='+JSON.stringify(array));
    //     return array;
    // },
    getCatname:function(cat){
        return category.findOne({_id:cat}).title;
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

