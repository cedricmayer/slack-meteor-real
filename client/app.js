

Template.posts.helpers({												//create message array from Messa
  posts: Posts.find({})
});


Template.input_form.events({												// create new object in database when Submit a new job post form
	'click .test_enter_button' : function(event) {
		var inputVal = $('.input-box_title').val();
		var descriptionVal = $('.input-box_description').val();
		var companyVal = $('.input-box_company').val();
		

	    if(!!inputVal) {
        	event.stopPropagation();

	        Posts.insert({
	        	job_title: $('.input-box_title').val(),
	        	description: $('.input-box_description').val(),
	        	location: $('.input-box_location').val(),
	        	company_name: $('.input-box_company').val(),
	        	post_date: ('Today')
       	    });

	    console.log('company is ' + companyVal);

        $('.input-box_title').val("");
        $('.input-box_description').val("");
        $('.input-box_company').val("");
        $('.input-box_location').val("");

        return false;
	    }
	}
});