Template.header.events({
	"mouseenter .header":function(e,tpl){
		e.preventDefault();
		//var ip = "Ip ip_address";
		var currentLocation = window.location.href;
  		//var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
  		//var timestamp =new Date().now();// (new Date(datestr.split(".").join("-")).getTime())/1000;
  		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var timestamps = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var timestamp = new Date(timestamps).toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = t.format("dd.mm.yyyy hh:MM:ss");
		var userId = Meteor.userId();
		var name_div = $(e.currentTarget).attr("name");
		//alert("Name dive:"+name_div);
		$.getJSON("http://jsonip.com/?callback=?", function (data) {
	        console.log(data);
	        Session.set("DATAIP",data.ip);
	       //alert("Get Ip :"+data.ip);
	    });
	   	var clientIp = Session.get("DATAIP");
		//alert("All my alert:"+Session.get("DATAIP"));
		var obj={
			clientIp:clientIp,
			timestamp:timestamp,
			userId:Meteor.userId(),
			currentLocation:currentLocation,
			name_div:name_div
		}
		
		Meteor.call('getmouses',clientIp,obj);
	}
});

