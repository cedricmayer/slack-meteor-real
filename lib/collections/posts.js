Posts = new Mongo.Collection("posts");

Posts.insert({													// test inserting a job posting in database
        	job_title: ('testing'),
        	description: ('testing'),
        	location: ('testing'),
        	company_name: ('testing'),
        	post_date: ('testing')
});