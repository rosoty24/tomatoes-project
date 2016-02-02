Template.leftside.helpers({
        getproductName:function(id){
            return data.findOne({_id:id}).product_name;
        },
        getProductReview:function(){
            return data.find({status:1});
        },
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
        getreview:function(){
            arr=[];
            function onlyUnique(value, index, self) { 
             return self.indexOf(value) === index;
            }
            var result=data.find({});
            result.forEach(function(value){
                //arr.push(value.id_product);
                var positive = review.find({id_product:value._id,type:"professional",score:{$gte:3}}).count();
                var countreview = review.find({id_product:value._id,type:"professional"}).count();
                var result = (Number(positive)/Number(countreview))*100;
                result = (result.toString()).replace(/(\d+)(\.)(.*)/gi,'$1');
                var obj = {
                    "_id" : value._id,
                    "product_name" : value.product_name,
                    "average": result
                }
                arr.push(obj);

            });
            arr.sort(function(a, b){
                var keyA = a.average;
                var keyB = b.average;
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
            });
            //return arr;
            var unique = arr.filter( onlyUnique );
            //console.log("UNIQ="+unique);
            return unique;
        },
    getAverage:function(id){
        var positive = review.find({id_product:id,type:"professional",score:{$gte:3}}).count();
        console.log("POSSIVE IS: "+positive);
        var countreview = review.find({id_product:id,type:"professional"}).count();
        var result = (Number(positive)/Number(countreview))*100;
        result = (result.toString()).replace(/(\d+)(\.)(.*)/gi,'$1');
        console.log("RESULT IS :"+result);
        return result;  
         
    },
    getTopperfume:function(){
         arr=[];
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var getcat = category.findOne({title:"Perfume"});
        var catId = getcat._id;
        console.log("CATID="+catId);
        var result = data.find({category:catId});
        result.forEach(function(value){
                //arr.push(value.id_product);
                var positive = review.find({id_product:value._id,type:"professional",score:{$gte:3}}).count();
                var countreview = review.find({id_product:value._id,type:"professional"}).count();
                var result = (Number(positive)/Number(countreview))*100;
                result = (result.toString()).replace(/(\d+)(\.)(.*)/gi,'$1');
                var obj = {
                    "_id" : value._id,
                    "product_name" : value.product_name,
                    "average": result
                }
                arr.push(obj);

            });
            arr.sort(function(a, b){
                var keyA = a.average;
                var keyB = b.average;
                if(keyA < keyB) return -1;
                if(keyA > keyB) return 1;
            });
            //return arr;
            var unique = arr.filter( onlyUnique );
            //console.log("UNIQ="+unique);
            return unique;
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
    },
    checkcolor:function(average){
        if(average<60){
             return "color-orange";
        }else{
            return "color-green";
        }
    },
    checkaverage:function(average){
        if(average == "undefined" || average < 0)
            return "0";
        else
            return average;
    }
        
});
