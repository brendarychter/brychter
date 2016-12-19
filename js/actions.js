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
	//Agregar title y alt
	var arrayPhotos = ["img/libro.svg", "img/onda_vaga.png"];
	var i = 0;
	setInterval(function(){
		if (i == arrayPhotos.length){
			i = 0;
		}
    	$("#slider-images").prop("src", arrayPhotos[i++]);
	},3000);


	$('.pick-color').on('click', function(){
		var color = $(this).attr('color');
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
		if(color == "blue"){
			changeColorItems("blue", "yellow", "pink");
		}else if (color == "pink"){
			changeColorItems("pink", "blue", "yellow");
		}else if (color == "yellow"){
			changeColorItems("yellow", "blue", "pink");
		}
	}

	function changeColorItems(selectedColor, color2, color3){
		localStorage.setItem("color", selectedColor);

		$('.color-change').removeClass(color2+"-color");
		$('.color-change').removeClass(color3+"-color");
		$('.color-change').addClass(selectedColor+"-color");

		//Footer
		$('.color-change-footer').hover(function(){
			$(this).removeClass(color2+'-color-footer');
			$(this).removeClass(color3+'-color-footer');
			$(this).addClass(selectedColor+'-color-footer');
		})

		//Header
		$('.color-change-header').hover(function(){
			$(this).removeClass(color2+'-color-header');
			$(this).removeClass(color3+'-color-header');
			$(this).addClass(selectedColor+'-color-header');
		})
		//Header onpage
		applyHeaderColor(selectedColor, color2, color3)

		// //Cv online
		$('.timeline-image').removeClass(color2+"-color");
		$('.timeline-image').removeClass(color3+"-color");
		$('.timeline-image').addClass(selectedColor+"-color");

		$('.timeline-panel .subheading').removeClass(color2+"-color-text");
		$('.timeline-panel .subheading').removeClass(color3+"-color-text");
		$('.timeline-panel .subheading').addClass(selectedColor+"-color-text");

		//Active color in footer
		$('.pick-color').removeClass("active-color");
		$('.'+selectedColor).addClass("active-color");
	}

	function applyHeaderColor(selectedColor, color2, color3){
		var page = $(document.body).attr('data-page');
		switch(page){
			case "gallery":
			console.log("entro")
				$('.header-gallery').removeClass(color2+"-color-text");
				$('.header-gallery').removeClass(color3+"-color-text");
				$('.header-gallery').addClass(selectedColor+"-color-text");
				break;
			case "contact":
				$('.header-contact').removeClass(color2+"-color-text");
				$('.header-contact').removeClass(color3+"-color-text");
				$('.header-contact').addClass(selectedColor+"-color-text");
				break;
			case "cv":
				$('.header-cv').removeClass(color2+"-color-text");
				$('.header-cv').removeClass(color3+"-color-text");
				$('.header-cv').addClass(selectedColor+"-color-text");
				break; 
		}
	}
});