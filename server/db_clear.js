
Meteor.startup(function() {										//clears database on program start
  Posts.remove({});          
});
