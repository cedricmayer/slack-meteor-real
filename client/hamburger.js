$( "#hamburger" ).click(function(){
 	var temp = $( "#filters_slide" );
  	if(parseInt(temp.css('left')) < 0)
		$( "#filters_slide" ).css('left', '1px');
	else
		$( "#filters_slide" ).css('left', '-400px');
});