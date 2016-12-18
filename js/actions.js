$(document).ready(function(){

	//Scroll with animation home
	$('.what-i-do').on('click', function(){
		$('html, body').animate({
	        scrollTop: $("#main-section").offset().top
	    }, 1000);
	})

	//Array fotos para slider de home
	var arrayPhotos = ["img/img1.svg", "img/img2.png"];
	var i = 0;
	setInterval(function(){
		if (i == arrayPhotos.length){
			i = 0;
		}
    	$("#slider-images").prop("src", arrayPhotos[i++]);
	},3000);


	$('.pick-color').on('click', function(){
		var color = $(this).attr('color');

		//Footer hover
		//menu hover
		//success
		//localStorage color for whole site
		if(color == "blue"){
			console.log("change to blue")
			$('.color-change').removeClass("pink-color");
			$('.color-change').addClass("blue-color");
		}else if (color == "pink"){
			console.log("change to pink")
			$('.color-change').removeClass("blue-color");
			$('.color-change').addClass("pink-color");
		}
	})
});