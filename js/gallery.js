$(document).ready(function(){
	//Json de imagenes y sus descripciones
	var arrayWorks = [
		{"name": "Afiche", "id": 0, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_0.png", "id_subject": "dsn"},
		{"name": "Mapping", "id": 1, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png", "id_subject": "dsn"},
		{"name": "Blink App", "id": 2, "subject": "Proyecto Senior II", "image": "img/gallery/thumbs/thumb_2.png", "id_subject": "prog"},
		{"name": "Editorial", "id": 3, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_3.png", "id_subject": "dsn"},
		{"name": "Hiperrealismo", "id": 4, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_4.png", "id_subject": "dsn"},
		{"name": "Stop Motion", "id": 5, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_5.png", "id_subject": "foto"},
		{"name": "Konex Web App", "id": 6, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_6.png", "id_subject": "prog"},
		{"name": "Patra&ntilde;a", "id": 7, "subject": "Fase 8", "image": "img/gallery/thumbs/thumb_7.png", "id_subject": "fase"},
		{"name": "Tripnic", "id": 8, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_8.png", "id_subject": "dsn"},
		{"name": "Oasis del Cemento", "id": 9, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_9.png", "id_subject": "arte"},
		{"name": "Claves", "id": 10, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_10.png", "id_subject": "foto"},
		{"name": "Verteo", "id": 11, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_11.png", "id_subject": "arte"},
		{"name": "Tipograf&iacute;a", "id": 12, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_12.png", "id_subject": "dsn"},
		{"name": "Anti Red Social", "id": 13, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_13.png", "id_subject": "arte"},
		{"name": "Lirkod", "id": 14, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_14.png", "id_subject": "dsn"},
		{"name": "S&iacute; acepto", "id": 15, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_15.png", "id_subject": "dsn"},
		{"name": "Proyecto Meraki", "id": 16, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_16.png", "id_subject": "dsn"},
		{"name": "E&amp;E", "id": 17, "subject": "Seminario II", "image": "img/gallery/thumbs/thumb_17.png", "id_subject": "sem"},
		{"name": "Retrato", "id": 18, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_18.png", "id_subject": "audio"},
		{"name": "Texturas", "id": 19, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_19.png", "id_subject": "audio"},
		{"name": "Enfoques", "id": 20, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_20.png", "id_subject": "foto"},
		{"name": "Tierra de Todos", "id": 21, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_21.png", "id_subject": "dsn"},
		{"name": "Robot", "id": 22, "subject": "3D", "image": "img/gallery/thumbs/thumb_22.png", "id_subject": "3d"},
		{"name": "Redibujado de fotos", "id": 23, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_23.png", "id_subject": "dsn"},
		{"name": "Montaje", "id": 24, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_24.png", "id_subject": "dsn"},
		{"name": "Grilla", "id": 25, "subject": "Dise&ntilde; III", "image": "img/gallery/thumbs/thumb_25.png", "id_subject": "dsn"},
		{"name": "Encuentro", "id": 26, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_26.png", "id_subject": "foto"},
		{"name": "Secuencia", "id": 27, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_27.png", "id_subject": "audio"},
		{"name": "Postal", "id": 28, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_28.png", "id_subject": "dsn"},
		{"name": "Flappy Adventure", "id": 29, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_29.png", "id_subject": "prog"},
		{"name": "Libro interactivo", "id": 30, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_30.png", "id_subject": "dsn"},
		{"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_31.png", "id_subject": "dsn"}
	];

	//Array con cada objeto para cada imagen (+- 3 imagenes y descripcion de cada uno) y descripcion general
	var arrayThumbs = [
		{	
			"description": "Redise&ntilde;o de afiches para la pel&iacute;cula Black Swan</br> Dise&ntilde;o I",
			"works": [{"name": "Tipogr&aacute;fico", "src": "img/gallery/thumbs/thumb_2.png"}, {"name": "Ilustraci&oacute;n", "src": "img/gallery/thumbs/thumb_2.png"}, {"name": "Fotogr&aacute;fico", "src": "img/gallery/thumbs/thumb_2.png"}]
		},
		{	
			"description": "Mapping",
			"works": [{"name": "Tipogr&aacute;fico", "src": "img/gallery/thumbs/thumb_2.png"}, {"name": "Ilustraci&oacute;n", "src": "img/gallery/thumbs/thumb_3.png"}, {"name": "Fotogr&aacute;fico", "src": "img/gallery/thumbs/thumb_4.png"}]
		}
	]

	//Agregar cada item al contenedor
	for (var i in arrayWorks){
		var item2 = arrayWorks[i];
		//<figcaption class='hover-item'><h3>"+arrayWorks[i].name+"</h3><small>"+arrayWorks[i].subject+"</small></figcaption>
		var thumb = "<figure class='col col-sm-4 col-md-3 col-lg-3 work-item' data-work='"+arrayWorks[i].id+"'><img src='"+arrayWorks[i].image+"' class='img-responsive img-thumb' title='"+arrayWorks[i].name+"' alt='"+arrayWorks[i].name+"' /></figure>";
		$('.gallery-items').append(thumb);
	}

	//Al clickear cada item, mostrar en el overlay unicamente los que son
	// $('.work-item').on("click", function(){
	// 	$('.layer-works').show();
	// 	var work = Number($(this).attr("data-work"));
	// 	work = 0;
	// 	$('.items-to-show').empty();
	// 	var text = "<h2>"+arrayThumbs[work].description+"</h2>"
 //  		$('.items-to-show').append(text);
	// 	for (var n in arrayThumbs[work].works){
	// 		var item = arrayThumbs[work].works[n]
 //  			var img = "<figure class='col-sm-6 col-md-3 col-lg-3 work-info'><img src='"+item.src+"' alt='"+item.name+"' title='"+item.name+"'/><p>"+item.name+"</p></figure>";
 //  			$('.items-to-show').append(img)
	// 	}
	// })

	$('.layer-works').on("click", function(){
		$(this).hide();
	})
});