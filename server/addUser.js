Meteor.methods({
    addUser:function(username,fname,lname,email,password,mySelect){
        targetUserId=Accounts.createUser({
            email: email,
            password: password,
            profile:{
              username:username,
              firstname:fname,
              lastname:lname
            }
       });
    Roles.setUserRoles(targetUserId, [mySelect])
   },
   deleteUser: function (id) {
      return Meteor.users.remove(id);
   }
   
});
// update user
Meteor.methods({
  updateroles:function(id,mySelect){
        var attr=[mySelect];
        return Meteor.users.update({_id:id},{$set:{roles:attr}});
    },
    edituser: function(id,username,fname,lname,email) {
        var attr={
            emails:[{address: email,verified: "false"}],
            profile:{
              username:username,
              firstname:fname,
              lastname:lname
            }
        }
        return Meteor.users.update({_id:id},{$set: attr});
    }
});