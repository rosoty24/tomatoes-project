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
    },
    getdata:function(){
      return data.find({status:1});
    },
    getreview:function(){
        arr=[];
        function onlyUnique(value, index, self) { 
         return self.indexOf(value) === index;
        }
        var result=review.find({type:"professional"});
        result.forEach(function(value){
            arr.push(value.id_product);
        });
        //var arr=['aaa','cc','ajdjfdj','aaa',12];
        var unique = arr.filter( onlyUnique );
        return unique;
    },
    getAverage:function(id){
            var positive = review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
          console.log("POSSIVE IS: "+positive);
          var countreview = review.find({id_product:id,type:"professional"}).count();
          var result = (Number(positive)/Number(countreview))*100;
            result = (result.toString()).replace(/(\d+)(\.)(.*)/gi,'$1');
          return result;   
    },
    coloraverage:function(id){
        var positive = review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
        var countreview = review.find({id_product:id,type:"professional"}).count();
        var result = (Number(positive)/Number(countreview))*100;
        if(result<60){
            return "color-orange";
        }else{
            return "color-green";
        }
    }
        
});