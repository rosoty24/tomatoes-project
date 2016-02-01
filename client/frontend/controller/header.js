Template.header.helpers({
	getCatename:function(){
		return category.find({});
	}
});
Template.details.rendered = function(){
	//var current = Router.current().route.path(this);
	//Session.set("CURRENT-DETAILS",current);	
};
Template.leftside.helpers({
	checkDetails:function(){
		var current = Session.get("CURRENT-DETAILS");
		console.log("CURRENT-DETAILS="+current);
	}
});