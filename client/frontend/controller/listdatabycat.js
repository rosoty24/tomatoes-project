Template.listdatabycat.helpers({
	getcat:function(){
        var catId = this.category;
        return category.findOne({_id:catId}).title;
    },
    // getDatalist: function(){
    //     var catID = this._id;
    //     var result = data.find({category:catID});
    //     return result;
    // },
       getData:function(){
        var arr=[];
        var query=6;
        var array=[];
        var nunberPage=Session.get('next');
        if(nunberPage){
          query=nunberPage*6;  
        }
        var catID = this._id;
        //alert(catID);
        var items = data.find({category:catID},{limit:query});  
        //alert('itmes='+JSON.stringify(items));
        
        items.forEach(function(value){
            var obj={
                _id             : value._id,
                name            : value.name,
                image           : value.image,
                category        : value.category,
                perfume_pyramid :value.perfume_pyramid,
                accords         : value.accords,
                ratings         :value.ratings,
                peoplevote      :value.peoplevote,
                id_product      : value.id_product,
                Longevity       :value.Longevity,
                Sillage         : value.Sillage
            }
            arr.push(obj);
        });
        //alert('itmesmakara='+JSON.stringify(arr));
        if(query<12){
            var start=0;
        }else{
            var start=query-6;
        }
       //alert('start='+start+',query='+query);
        for(var i=start;i<query;i++){
            if(arr[i]){
                array.push(arr[i]);
            }
           
        }
        //alert('datapaginatoin='+JSON.stringify(array));
        return array;
    }

});