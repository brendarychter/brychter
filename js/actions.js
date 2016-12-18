$(document).ready(function(){

	//Scroll with animation home
	$('.what-i-do').on('click', function(){
		$('html, body').animate({
	        scrollTop: $("#main-section").offset().top
	    }, 1000);
	})

	//Array fotos para slider de home
	var arrayPhotos = ["img1.png", "img2.png", "video1.mp4", "img3.png", "video2.mp4"]
});