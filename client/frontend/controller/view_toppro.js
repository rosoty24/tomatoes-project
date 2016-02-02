
Template.viewStatus.helpers({
    getProductReview:function(){
            return data.find({status:1});
        }
});
Template.viewTopReview.helpers({
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
                    "image":value.image,
                    "average": result
                }
                arr.push(obj);

            });
            arr.sort(function(a, b){
                var keyA = a.average;
                var keyB = b.average;
                if(keyA < keyB) return 1;
                if(keyA > keyB) return -1;
            });
            //return arr;
            var unique = arr.filter( onlyUnique );
            //console.log("UNIQ="+unique);
            return unique;
        }
});
Template.viewTopPerfume.helpers({
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
                    "image":value.image,
                    "average": result
                }
                arr.push(obj);

            });
            arr.sort(function(a, b){
                var keyA = a.average;
                var keyB = b.average;
                if(keyA < keyB) return 1;
                if(keyA > keyB) return -1;
            });
            //return arr;
            var unique = arr.filter( onlyUnique );
            //console.log("UNIQ="+unique);
            return unique;
    }
});