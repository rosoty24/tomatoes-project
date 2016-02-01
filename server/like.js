Meteor.methods({
  insertFavorite:function(attr){
    favorite.insert(attr);
  },
  deleteFavorite:function(id,user){
    favorite.remove({proId:id,userId:user});
  }
});