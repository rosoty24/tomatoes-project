Template.topProduct.events({
	"click #btn-add":function(e,tpl){
		e.preventDefault();
		var pro = tpl.$('#products').val();
		var status = 1;
		//alert('Hello'+pro);
		var obj = {
			status:status
		}
		alert('Success');
		Meteor.call("insert",pro,obj);
		
	},
	"click #remove":function(e){
        e.preventDefault();
        //alert('Remove Project!!!');
        var status = this.status;
       	alert(" id "+this._id);
        Meteor.call("deleteStatuds",this._id);
        
    }
});
Template.topProduct.helpers({
	getProduct:function(){
		return data.find({});
	},
	getdata:function(){
		return data.find({status:1});
	}
});