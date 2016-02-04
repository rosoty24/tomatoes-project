Template.addproduct222.events({
	"click #add-pro":function(e){
		e.preventDefault();
		var product_name = $("#name").val();
		var image = Session.get('ADDIMAGEID');
		var catId = $("#category").val();
		alert(product_name+image+catId);
		var pyramid = [];
		var accords= [];
		var ratings = [];
        var longevity = [];
        var sillage = [];
        var have_it = $("#have_it").val();
        var had_it = $("#had_it").val();
        var want_it = $("#want_it").val();
        var signature = $("#signature").val();
        var recommend = $("#recommend").val();
        var top_notes = [];
        var middle_notes = [];
        var base_notes = [];
        /*=================== PYRAMIT ======================*/
        $("#tbodypyramid .pyramid-attr").each( function(){
        	var type = $(this).attr('data-pyramid-type');
        	var title = $(this).attr('data-pyramid-title');
        	var val = "";
        	
        	var obj = {title:title,url:"url"};
        	if(type=="top_notes"){
        		top_notes.push(obj);
        		
			}else if(type=="middle_notes"){
				middle_notes.push(obj);
			}else if(type=="base_notes"){
				base_notes.push(obj);
			}
			
			
		});
		pyramid = {top_notes:top_notes, middle_notes:middle_notes, base_notes:base_notes};
		
		console.log(pyramid);
		/*=================== ACCORDS ======================*/
		$("#tbodyaccords .type-accords").each( function(){
			accords.push( {name:$(this).attr('data-accords-name')} );
		})
		
		console.log(accords);
		/*=================== RATINGS ======================*/
		$("#tbodyratings .rat").each( function(){
			var a = $(this).attr('data-type-ratings');
			var b = $(this).attr('data-value-ratings');
	
			ratings.push({feel:a,value:b});
		})
		
		console.log(ratings);
		/*=================== LONGEVITY ======================*/
		$("#tbodylongevity .longevity").each( function(){
			var name = $(this).attr('data-longevity-name');
			var user = $(this).attr('data-longevity-user');
			var value = $(this).attr('data-longevity-value');
			
			longevity.push({name:name,user:user,value:Number(value)});
		})
		
		console.log(longevity);
		/*=================== SILLAGE ======================*/
		var mySillage=$("#tbodysillage .sillage");
		for(var i=0;i<mySillage.length;i++){
			var name = mySillage[i].attr('data-sillage-name');
			var user = mySillage[i].attr('data-sillage-user');
			var value = $(this).attr('data-sillage-value');
			
			sillage.push({name:name,user:user,value:Number(value)});
		}
		/*$("#tbodysillage .sillage").each( function(){
			var name = $(this).attr('data-sillage-name');
			var user = $(this).attr('data-sillage-user');
			var value = $(this).attr('data-sillage-value');
			
			sillage.push({name:name,user:user,value:Number(value)});
		})*/
		console.log(sillage);
		/*data_sillage = [];
		for(var i =0 ; i<sillage.length;i++){
			//data_sillage.push({Sillage:sillage[i]});
			data_sillage.push(sillage[i]);
		}
		console.log(data_sillage);
		*/
		/*=================== STRUCTURE JSON =====================*/
		/*var new_obj = {
			product_name:product_name,
			image:image,
			category:category,
			perfume_pyramid:pyramid,
			accords:accords,
			ratings:ratings,
			Longevity:longevity,
			Sillage:sillage,
			peoplevote:{
				have_it:have_it,
				had_it:had_it,
				want_it:want_it,
				signature:signature
			},
			recommend:recommend
		}*/
		var peoplevote = {
				have_it:have_it,
				had_it:had_it,
				want_it:want_it,
				signature:signature
			}
		Meteor.call("InsertProduct",product_name,image, category, pyramid, accords, ratings, longevity, sillage, peoplevote, recommend,function(error){
			if(error){
				console.log("Error insert product"+error.reason());
			}else{
				console.log("Insert product succsess");
			}
		})
	},
	"click #add-pyramid":function(e){
		e.preventDefault();
    	var html = "";
        var type = $('#pyramid_type').val();
        var title = $("#pyramid_title").val();
        var url = $("#pyramid_url").val();
        html += '<tr class="pyramid-attr" data-pyramid-type="'+type+'" data-pyramid-title="'+title+'" data-url="'+url+'">';
            html += '<td></td>'
            html += '<td class="pyramid-type">'+type+'</td>';
            html += '<td class="pyramid-title">'+title+'</td>';
            html += '<td class="pyramid-url">'+url+'</td>';
            //html += '<td class="value_shop" data-value-shop="'+value_shop+'">'+value_shop+'</td>';
            html += '<td><a class="remove glyphicon glyphicon-remove-circle"></a></td>';
        html += '</tr>';
        $('#tbodypyramid').append(html);
	},
	"click #add-accords":function(e){
		e.preventDefault();
    	var html = "";
        var name = $('#accords_name').val();
        html += '<tr>';
            html += '<td></td>'
            html += '<td class="type-accords" data-accords-name="'+name+'">'+name+'</td>';
            //html += '<td class="value_shop" data-value-shop="'+value_shop+'">'+value_shop+'</td>';
            html += '<td><a class="remove glyphicon glyphicon-remove-circle"></a></td>';
        html += '</tr>';
        $('#tbodyaccords').append(html);
	},
	"click #add-feel":function(e){
		e.preventDefault();
    	var html = "";
        var type = $('#type_feel').val();
        var value = $('#feel_value').val();
        html += '<tr class="rat" data-type-ratings="'+type+'" data-value-ratings="'+value+'">';
            html += '<td></td>'
            html += '<td class="type_ratings" data-type-ratings="'+type+'">'+type+'</td>';
            html += '<td class="value_ratings" data-value-ratings="'+value+'">'+value+'</td>';
            //html += '<td class="value_shop" data-value-shop="'+value_shop+'">'+value_shop+'</td>';
            html += '<td><a class="remove glyphicon glyphicon-remove-circle"></a></td>';
        html += '</tr>';
        $('#tbodyratings').append(html);
	},
	"click #add-longevity":function(e){
		e.preventDefault();
    	var html = "";
        var name = $('#longevity_name').val();
        var user = $('#longevity_user').val();
        var val = $('#longevity_value').val();
        html += '<tr class="longevity" data-longevity-name="'+name+'" data-longevity-user="'+user+'" data-longevity-value="'+val+'">';
            html += '<td></td>'
            html += '<td class="longevity-name">'+name+'</td>';
            html += '<td class="longevity-user">'+user+'</td>';
            html += '<td class="longevity-val">'+val+'</td>';
            //html += '<td class="value_shop" data-value-shop="'+value_shop+'">'+value_shop+'</td>';
            html += '<td><a class="remove glyphicon glyphicon-remove-circle"></a></td>';
        html += '</tr>';
        $('#tbodylongevity').append(html);
	},
	"click #add-sillage":function(e){
		e.preventDefault();
    	var html = "";
        var name = $('#sillage_name').val();
        var user = $('#sillage_user').val();
        var val = $('#sillage_value').val();
        html += '<tr class="sillage" data-sillage-name="'+name+'" data-sillage-user="'+user+'" data-sillage-value="'+val+'">';
            html += '<td></td>'
            html += '<td class="sillage-name">'+name+'</td>';
            html += '<td class="sillage-user">'+user+'</td>';
            html += '<td class="sillage-val">'+val+'</td>';
            //html += '<td class="value_shop" data-value-shop="'+value_shop+'">'+value_shop+'</td>';
            html += '<td><a class="remove glyphicon glyphicon-remove-circle"></a></td>';
        html += '</tr>';
        $('#tbodysillage').append(html);
	},
	'click .remove': function(e,tpl){
		$(e.currentTarget).parent().parent().remove();
	},
	'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    },
    'click #add':function(e,tlp){
    	e.preventDefault();
    	//alert();
    	var num = tlp.$('#number').val();
    	var cod = tlp.$('#code').val();
    	var obj = {
    	 	number:num,
    	 	code:cod
    	 }
    	arr.push(obj);
    	Session.set('perfume',arr);
    }
});
var arr = [];
Template.addproductwww.helpers({
	getCatname:function(){
		return category.find();
	},
	getImage: function(){
		var image = Session.get('ADDIMAGEID');
        var img = images.findOne({_id:image});
        if(img){
            console.log(img.copies.images.key);
            return img.copies.images.key;
        }else{
            return;
        }
    }
});
Template.updateProduct2222.events({
	'click #btnUpdate': function(e){
		e.preventDefault();
		var id = this._id;
		var author = Meteor.userId();
		var title = $('#title').val();
		var price = $('#price').val();
		var stock = $("#stock").val();
		var img = Session.get('ADDIMAGEID');
		var currentImage = $("#current").val();
		var description = $('#description').val();
		var category =$('#category').val();
		var recommend =$('#recommend').val();
		alert("My recommend:"+recommend);
		var date = new Date();
		if(typeof img == "undefined")
			img = currentImage;
		else
			img = img;
		var obj={
			title:title,
			description:description,
			price:price,
			stock:stock,
			img:img,
			author:author,
			category:category,
			recommend:recommend,
			date:date,
			status:0
		}
		Meteor.call("UpdateSubmit",id,obj,function(erro){
			if(erro){console.log(erro.reason())}
			else{
				console.log("SUCESS UPDATE");
				Session.set('ADDIMAGEID',undefined);
				Router.go("/admin/product");
			}
		});
	},
	'change #img': function(event, template) {
        var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
          	images.insert(files[i], function (err, fileObj) {
	            // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            	Session.set('ADDIMAGEID', fileObj._id);
          	});
        }
    }
});