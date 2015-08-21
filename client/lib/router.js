
Router.route('/', {
	template: 'home'
	// ,
	// waitOn: function(){
 //        return [IRLibLoader.load('http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js')]
 //    }
});

Router.route('/form');

Router.route('/view_post');

Router.configure({
    layoutTemplate: 'main'
});








// Template.posts.events({												// create new object in database when Submit a new job post form
// 	'click .post_button' : function(event) {
	 	
// 		console.log('router should be working');
// 	}
// });


// Router.map( function () {
//   this.route('codeEditor',{
//     waitOn: IRLibLoader.load('http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js')
//   });
// });