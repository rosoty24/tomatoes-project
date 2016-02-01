Template.login.events({
	'submit #signupform': function(event){
    	event.preventDefault();
    	var email=$("#email").val();
    	var firstname =$('#firstname').val();
		var lastname =$('#lastname').val();
		var password = $('#password').val();
		var rerole = 'member';
		var msg = '';
		if( firstname == '' || lastname == ''  || email=='' || password ==''){
			if( firstname == '' )
				msg += 'Firt Name is required.';
			if( lastname == '' )
				msg += 'Last Name is required.';
			if( email == '' )
				msg += 'email is required.';
			if( password == '' )
				msg += 'password is required.';
			
			Session.set("registerError", msg );
		}
		else{
			//alert(firstname+lastname+email+password);
			Meteor.call('regUser',email, firstname, lastname, password, rerole, function(err){
				if(err){
					console.log(err.reason);
				}else{
					alert("successfully");
				}
			});
		}
    	
    },
	'click #btn-login':function(e){
		e.preventDefault();
		var email = $('[name=email]').val();
        var password = $('[name=password]').val();
		/*$('.close').click();*/
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
			} else {
				alert("successfully");
				Router.go('/admin');
			}
		});
    }
});

Template.header.events({
    'click #logout': function(event){
        event.preventDefault();
        //alert('logout!!!');
        Meteor.logout();
        Router.go('/login');
    }
});