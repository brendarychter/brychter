$(document).ready(function(){
	console.log('hola')

	$('.what-i-do').on('click', function(){
		//$("html, body").delay(6000).animate({scrollTop: $('#main-section').offset().top }, 2000);
		$('html, body').animate({
        scrollTop: $("#main-section").offset().top
    }, 1000);
	})
});