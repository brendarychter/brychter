$(document).ready(function(){
	var arrayWorks = [
		{"name": "Afiche", "id": 0, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_0.png", "id_subject": "dsn"},
		{"name": "Mapping", "id": 1, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png", "id_subject": "dsn"},
		{"name": "Blink App", "id": 2, "subject": "Proyecto Senior II", "image": "img/gallery/thumbs/thumb_2.png", "id_subject": "prog"},
		{"name": "Editorial", "id": 3, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_3.png", "id_subject": "dsn"},
		{"name": "Hiperrealismo", "id": 4, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_4.png", "id_subject": "dsn"},
		{"name": "Stop Motion", "id": 5, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_5.png", "id_subject": "foto"},
		{"name": "Web App", "id": 6, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_6.png", "id_subject": ""},
		{"name": "Patra&ntilde;a", "id": 7, "subject": "Fase 8", "image": "img/gallery/thumbs/thumb_7.png", "id_subject": ""},
		{"name": "Tripnic", "id": 8, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_8.png", "id_subject": ""},
		{"name": "Oasis del Cemento", "id": 9, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_9.png", "id_subject": ""},
		{"name": "Claves", "id": 10, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_10.png", "id_subject": ""},
		{"name": "Verteo", "id": 11, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_11.png", "id_subject": ""},
		{"name": "Tipograf&iacute;a", "id": 12, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_12.png", "id_subject": ""},
		{"name": "Anti Red Social", "id": 13, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_13.png", "id_subject": ""},
		{"name": "Lirkod", "id": 14, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_14.png", "id_subject": ""},
		{"name": "S&iacute; acepto", "id": 15, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_15.png", "id_subject": ""},
		{"name": "Proyecto Meraki", "id": 16, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_16.png", "id_subject": ""},
		{"name": "E&amp;E", "id": 17, "subject": "Seminario II", "image": "img/gallery/thumbs/thumb_17.png", "id_subject": ""},
		{"name": "Retrato", "id": 18, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_18.png", "id_subject": ""},
		{"name": "Texturas", "id": 19, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_19.png", "id_subject": ""},
		{"name": "Enfoques", "id": 20, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_20.png", "id_subject": ""},
		{"name": "Tierra de Todos", "id": 21, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_21.png", "id_subject": ""},
		{"name": "Robot", "id": 22, "subject": "3D", "image": "img/gallery/thumbs/thumb_22.png", "id_subject": ""},
		{"name": "Redibujado de fotos", "id": 23, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_23.png", "id_subject": ""},
		{"name": "Montaje", "id": 24, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_24.png", "id_subject": ""},
		{"name": "Grilla", "id": 25, "subject": "Dise&ntilde; III", "image": "img/gallery/thumbs/thumb_25.png", "id_subject": ""},
		{"name": "Encuentro", "id": 26, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_26.png", "id_subject": ""},
		{"name": "Secuencia", "id": 27, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_27.png", "id_subject": ""},
		{"name": "Postal", "id": 28, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_28.png", "id_subject": ""},
		{"name": "Flappy Adventure", "id": 29, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_29.png", "id_subject": ""},
		{"name": "Libro interactivo", "id": 30, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_30.png", "id_subject": ""},
		{"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_31.png", "id_subject": ""}
	];

	var arrayThumbs = [
		{	
			"id": 0,
			"description": "Afiches para la pel&iacute;cula Black Swan",
			"works": [{"name": "Tipogr&aacute;fico", "src": "img/gallery/big/thumb_1.png"}, {"name": "Ilustraci&oacute;n", "src": "img/gallery/big/thumb_1.png"}, {"name": "Fotograf&iacute;co", "src": "img/gallery/big/thumb_1.png"}]
		}
	]

	for (var i in arrayWorks){
		var item2 = arrayWorks[i];
		var thumb = "<div class='col-sm-6 col-md-3 col-lg-3 '"+arrayWorks[i].id_subject+"'><div class='gallery-item'><div class='hover-item'><a href='' title='"+arrayWorks[i].name+"'><div class='hover-text'><h4>"+arrayWorks[i].name+"</h4><small>"+arrayWorks[i].subject+"</small> </div><img src='"+arrayWorks[i].image+"' class='img-responsive img-thumb' title='"+arrayWorks[i].name+"' alt='"+arrayWorks[i].name+"'> </a> </div></div></div>";
		$('.gallery-items').append(thumb);
	}


	//Click button and display by subject type
	$('.gallery-button').on('click', function(){
		var subject = $(this).attr('data-subject');
		$('.gallery-button').removeClass('gallery-selected');
		$(this).addClass('gallery-selected');

		for (var i in arrayWorks){
			console.log($('dsn'))
			$(".gallery-items").find("[item-subject='dsn']");
		}


		//Mostrar los que tienen sólo el id de la materia seleccionada
		var $container = $('.subjects');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
  //       $('.cat a').click(function() {
  //           $('.cat .active').removeClass('active');
  //           $(this).addClass('active');
  //           var selector = $(this).attr('data-filter');
  //           $container.isotope({
  //               filter: selector,
  //               animationOptions: {
  //                   duration: 750,
  //                   easing: 'linear',
  //                   queue: false
  //               }
  //           });
  //           return false;
  //       });
	})
});