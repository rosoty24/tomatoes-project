
Meteor.methods({
	    regUser:function(email,firstname, lastname, password, rerole){
	   	targetUserId = Accounts.createUser({
	    email: email,
	    password: password,
	    profile:{firstname:firstname,lastname:lastname}
	   });
	   console.log(targetUserId);
	   //Roles.setUserRoles(id, roleid, 'noolab')
	   Roles.setUserRoles(targetUserId, [rerole], 'mygroup')
	  }
});