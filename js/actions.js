$(document).ready(function(){

	//Scroll with animation home
	$('.what-i-do').on('click', function(){
		$('html, body').animate({
	        scrollTop: $("#main-section").offset().top
	    }, 1000);
	})


	var color = "";
	changeColor(color);


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
		console.log(color)
		localStorage.setItem("color", color);
		changeColor(color);
		
	})

	function changeColor(color){
		if (localStorage.color == undefined){
			localStorage.setItem("color", "yellow");
			color = "yellow";
		}else{
			color = localStorage.getItem("color");
		}
		console.log(color)
		if(color == "blue"){
			localStorage.setItem("color", "blue");
			$('.color-change').removeClass("pink-color");
			$('.color-change').removeClass("yellow-color");
			$('.color-change').addClass("blue-color");

			//Footer
			$('.color-change-footer').hover(function(){
				$(this).removeClass('pink-color-footer');
				$(this).removeClass('yellow-color-footer');
				$(this).addClass('blue-color-footer');
			})

			//Header
			$('.color-change-header').hover(function(){
				$(this).removeClass('pink-color-header');
				$(this).removeClass('yellow-color-header');
				$(this).addClass('blue-color-header');
			})

			$('.pick-color').removeClass("active-color");
			$('.blue').addClass("active-color");


		}else if (color == "pink"){
			localStorage.setItem("color", "pink");
			$('.color-change').removeClass("blue-color");
			$('.color-change').removeClass("yellow-color");
			$('.color-change').addClass("pink-color");

			//Footer
			$('.color-change-footer').hover(function(){
				$(this).removeClass('blue-color-footer');
				$(this).removeClass('yellow-color-footer');
				$(this).addClass('pink-color-footer');
			})

			//Header
			$('.color-change-header').hover(function(){
				$(this).removeClass('blue-color-header');
				$(this).removeClass('yellow-color-header');
				$(this).addClass('pink-color-header');
			})
			$('.pick-color').removeClass("active-color");
			$('.pink').addClass("active-color");
			
		}else if (color == "yellow"){
			localStorage.setItem("color", "yellow");
			$('.color-change').removeClass("blue-color");
			$('.color-change').removeClass("pink-color");
			$('.color-change').addClass("yellow-color");

			//Footer
			$('.color-change-footer').hover(function(){
				$(this).removeClass('blue-color-footer');
				$(this).removeClass('pink-color-footer');
				$(this).addClass('yellow-color-footer');
			})

			//Header
			$('.color-change-header').hover(function(){
				$(this).removeClass('blue-color-header');
				$(this).removeClass('pink-color-header');
				$(this).addClass('yellow-color-header');
			})
			$('.pick-color').removeClass("active-color");
			$('.yellow').addClass("active-color");

		}
	}
});