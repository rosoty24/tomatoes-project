// ============== Categories ================
Router.route('/admin/addCategory', {
    name: 'categories'
});
Router.route('/admin/manageCategory', {
    name: 'manageCategory'
});

Router.route('/admin/updateCategory/:_id',{
    name:'updateCategory',
    data:function(){
        return category.findOne({_id: this.params._id});
    }
});

//=================== PRODUCT PAGE =============//

Router.route('/admin',{
    name: 'adminmenu'
});
Router.route('/admin/product/add',{
    name: 'addproduct'
});
Router.route('/admin/product/edit/:_id',{
    name: 'updateProduct',
    data:function(){
        return products.findOne({_id: this.params._id});
    }
});
Router.route('/admin/product',{
    name: 'allproduct'
});
//=================== REVIEW PAGE =============//
Router.route('/admin/addreview',{
    name:'addreview'
});
Router.route('/admin/managereview',{
    name:'managereview'
});
Router.route('/admin/updateReview/:_id',{
    name: 'updateReview',
    data:function(){
        return review.findOne({_id: this.params._id});
    }
});
Router.route('/admin/topProduct',{
    name: 'topProduct'
});