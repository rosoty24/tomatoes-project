var IR_BeforeHooks = {
    checkLogin:function(pause){
      if (!Roles.userIsInRole(Meteor.userId(), ['Admin','member'],'mygroup')) {
          this.render('login');
          pause();
      }else{
          this.next();
      }
    }
};
/*Router.onBeforeAction(IR_BeforeHooks.checkLogin, {
    only: [  
        'manageproduct',
        'addproduct',
        'manageCategory',
        'categories',
        'updateCategory',
        'addreview',
        'updateReview',
        'adduser',
        'listuser',
        'setting',
        'adminmenu',
        'allproduct'
    ]
  //except: ['admin','categories','login','register','projectlist','search','project','tage'] 
});*/
