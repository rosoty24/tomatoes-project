Router.configure({
    layoutTemplate: 'mainLayout',
});

Router.route('/submit',{
	name: 'submit'
});
Router.route('/managesubmit',{
	name: 'managesubmit'
});
Router.route('/updatesubmit/:_id', {
    name: 'updatesubmit',
    data: function(){
        return products.findOne({_id: this.params._id});
    }
});

Router.route('/',{
	name:'home'
});

Router.route('/login',{
	name: 'login'
});
Router.route('/profileAuthor/:_id' ,{
    name: 'profileAuthor',
    data:function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});

Router.route('/editprofileAuthor',{
    name: 'editprofileAuthor',
    data: function(){
        return Meteor.users.findOne({_id:Meteor.userId()});
    }
});
// Router.route('/homefront',{
//     name'homefront'
// });

Router.route('/admin/adduser',{
    name: 'adduser'
});
Router.route('/admin/listuser',{
    name: 'listuser'
});
Router.route('/admin/edituser/:_id',{
    name: 'edituser',
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('/disProduct/:_id',{
    name: 'disProduct',
     data:function(){
        return category.findOne({_id: this.params._id});
    }
});
Router.route('/details/:_id',{
    name: 'details',
    data:function(){
        return data.findOne({_id: this.params._id});
    }
});
Router.route('/viewAlluser/:_id', {
    name: 'Allreviewuser',
    data: function(){
        return data.findOne({_id: this.params._id});
    }
});
Router.route('/viewAllprofessional/:_id', {
    name: 'Allprofessional',
    data:function(){
        return data.findOne({_id:this.params._id});
    }
});
Router.route('/listdatabycat/:_id', {
    name: 'listdatabycat',
    data: function(){
        return category.findOne({_id: this.params._id});
    }
});

Router.route('/perfumeDetail/:_id',{
    name: 'perfumeDetail',
     data:function(){
        return data.findOne({_id: this.params._id});
    }
});

Router.route('/pagination', {
    name: 'pagination'
});

Router.route('/viewStatus', {
    name: 'viewStatus'
});

Router.route('/viewTopPerfume', {
    name: 'viewTopPerfume'
});
Router.route('/viewTopReview', {
    name: 'viewTopReview'
});