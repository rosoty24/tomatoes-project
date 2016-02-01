Template.pagination.events({
	// 'click #listCate':function(e){
	// 	e.preventDefault();
	// 	var id = this._id;
	// 	Session.set("categoriesId",id);
	// 	Router.go("list");
	// 	//alert(id);
	// },
	//=============Start Click next prev pagination=============
	'click .swiper-button-next':function(e){
		e.preventDefault();
		//alert('next');
		if(Session.get('next')){
			var i=1+Session.get('next');
		}else{
			var i=2;
		}
		//alert(i);
		Session.set('next',i);
	},
	'click .swiper-button-prev':function(e){
		e.preventDefault();
		//alert('prev');
		var prev=Session.get('next')-1;
		//alert(prev);
		Session.set('next',prev);

	},
	'click #home':function(e){
        e.preventDefault();
        //delete Session.keys['idCategory']
        Session.set('idCategory',false);
        Router.go('/');
    }
});
Template.pagination.helpers({
	getNumberPag:function(){
    	var arr=[];
    	//var num=Session.get('next');
    	var num=Number(data.find({category:this._id}).count());
    	if(num<=6){
    		var perpage=1;
    	}else{
    		var perpage=num/6;
    	}
		for(var i=0;i<perpage;i++){
			arr[i]=i+1;
		}
		console.log('page:'+arr);
		// alert(arr);
		return arr;
    }
});