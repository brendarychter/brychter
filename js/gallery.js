$(document).ready(function(){
	var arrayWorks = [
		{"name": "Afiche", "id": 0, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_0.png"},
		{"name": "Mapping", "id": 1, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Blink App", "id": 2, "subject": "Proyecto Senior II", "image": "img/gallery/thumbs/thumb_2.png"},
		{"name": "Editorial", "id": 3, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_3.png"},
		{"name": "Hiperrealismo", "id": 4, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_4.png"},
		{"name": "Stop Motion", "id": 5, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_5.png"},
		{"name": "Web App", "id": 6, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_6.png"},
		{"name": "Patra&ntilde;a", "id": 7, "subject": "Fase 8", "image": "img/gallery/thumbs/thumb_7.png"},
		{"name": "Tripnic", "id": 8, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_8.png"},
		{"name": "Oasis del Cemento", "id": 9, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_9.png"},
		{"name": "Claves", "id": 10, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_10.png"},
		{"name": "Verteo", "id": 11, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_11.png"},
		{"name": "Tipograf&iacute;a", "id": 12, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_12.png"},
		{"name": "Anti Red Social", "id": 13, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_13.png"},
		{"name": "Lirkod", "id": 14, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_14.png"},
		{"name": "S&iacute; acepto", "id": 15, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_15.png"},
		{"name": "Proyecto Meraki", "id": 16, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_16.png"},
		{"name": "E&amp;E", "id": 17, "subject": "Seminario II", "image": "img/gallery/thumbs/thumb_17.png"},
		{"name": "Retrato", "id": 18, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_18.png"},
		{"name": "Texturas", "id": 19, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_19.png"},
		{"name": "Enfoques", "id": 20, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_20.png"},
		{"name": "Tierra de Todos", "id": 21, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_21.png"},
		{"name": "Robot", "id": 22, "subject": "3D", "image": "img/gallery/thumbs/thumb_22.png"},
		{"name": "Redibujado de fotos", "id": 23, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_23.png"},
		{"name": "Montaje", "id": 24, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_24.png"},
		{"name": "Grilla", "id": 25, "subject": "Dise&ntilde; III", "image": "img/gallery/thumbs/thumb_25.png"},
		{"name": "Encuentro", "id": 26, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_26.png"},
		{"name": "Secuencia", "id": 27, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_27.png"},
		{"name": "Postal", "id": 28, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_28.png"},
		{"name": "Flappy Adventure", "id": 29, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_29.png"},
		{"name": "Libro interactivo", "id": 30, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_30.png"},
		{"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_31.png"},
		// {"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_33.png"},
		// {"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_33.png"},
		// {"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_33.png"},
		// {"name": "Blog", "id": 31, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_33.png"},
	];

	var arrayThumbs = [
		{	
			"id": 0,
			"works": [{"name": "name_2", "src": "img/gallery/big/thumb_1.png", "description": "description"}, {"name": "name_2", "src": "img/gallery/big/thumb_1.png", "description": "description"}, {"name": "name_2", "src": "img/gallery/big/thumb_1.png", "description": "description"}]
		}
	]

	for (var i in arrayWorks){
		var item2 = arrayWorks[i];
		var thumb = "<div class='col-sm-6 col-md-3 col-lg-3'><div class='gallery-item'><div class='hover-item'><a href='' title='"+arrayWorks[i].name+"'><div class='hover-text'><h4>"+arrayWorks[i].name+"</h4><small>"+arrayWorks[i].subject+"</small> </div><img src='"+arrayWorks[i].image+"' class='img-responsive img-thumb' title='"+arrayWorks[i].name+"' alt='"+arrayWorks[i].name+"'> </a> </div></div></div>";
		$('.gallery-items').append(thumb);
	}
});