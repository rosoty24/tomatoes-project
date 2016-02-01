//Session.set('CURRENTURL','');
Template.leftside.helpers({
    detial:function(){
    	var  str = Router.current().url;
        var current = str.replace("http://localhost:3000",""); 
    	var arr = current.split("/");
    	var detial = "";
    	if(current){
           for (var i = arr.length - 1; i >= 0; i--) {
           	if(arr[i] == "details"){
           		detial=arr[i];	
           	}
           }   
        }
        if (detial == "details") {
        	return true;
        }else{
        	return false;
        }
    }
});