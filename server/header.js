Meteor.methods({
ip_address: function(){
  		return this.connection.clientAddress;
},
getmouses:function(ip,obj){
	var ip = this.connection.clientAddress;
 	return mouse.insert(obj);
},
// getIP: function(){
//         var ip = this.connection.clientAddress;
//         return ip;
//     }
});
// Meteor.methods({
//     getIP: function(){
//         var ip = this.connection.clientAddress;
//         return ip;
//     }
// });
