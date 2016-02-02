Meteor.publish('users', function (){ 
  return users.find({});
});
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});


Meteor.publish('products', function (){ 
  return products.find({})
});

Meteor.publish('category', function (){ 
  return category.find({});
});

Meteor.publish('advertise', function (){ 
  return advertise.find({});
});

Meteor.publish('images', function (){ 
  return images.find({});
});
Meteor.publish('favorite', function (){ 
  return favorite.find({});
});
Meteor.publish('score', function (){ 
  return score.find({});
});
Meteor.publish('review', function (){ 
  return review.find({});
});
Meteor.publish('data', function (){ 
  return data.find({});
});
Meteor.publish('feeling', function (){ 
  return feeling.find({});
});

