$(document).ready(function(){
	var arrayWorks = [
		{"name": "Afiche", "id": 0, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Claves", "id": 1, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_2.png"},
		{"name": "Blink App", "id": 2, "subject": "Proyecto Senior II", "image": "img/gallery/thumbs/thumb_3.png"},
		{"name": "Editorial", "id": 3, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_4.png"},
		{"name": "Hiperrealismo", "id": 4, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_5.png"},
		{"name": "Web App", "id": 5, "subject": "Programaci&oacute;n Multimedial III", "image": "img/gallery/thumbs/thumb_6.png"},
		{"name": "Stop Motion", "id": 6, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Patra&ntilde;", "id": 7, "subject": "Fase 8", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Tripnic", "id": 8, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 9, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 10, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Aplicaci&oacute;n", "id": 11, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 12, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 13, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Web hogar", "id": 14, "subject": "Dise&ntilde;o II", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo Final", "id": 15, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 16, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Retrato", "id": 17, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Verteo", "id": 18, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Texturas", "id": 19, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Tipograf&iacute;a", "id": 20, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Enfoques", "id": 21, "subject": "Fotograf&iacute;a", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo Final", "id": 22, "subject": "Dise&ntilde;o I", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 23, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Redibujado de fotos", "id": 24, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 25, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Grilla", "id": 26, "subject": "Dise&ntilde; III", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Oasis de Cemento", "id": 27, "subject": "Arte Digital II", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Secuencia", "id": 28, "subject": "T&eacute;cnicas Audiovisuales", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 29, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Postal", "id": 30, "subject": "Software Creativo", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 31, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Libro interactivo", "id": 32, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 33, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Lirkod", "id": 34, "subject": "Dise&ntilde;o III", "image": "img/gallery/thumbs/thumb_1.png"},
		{"name": "Trabajo 1", "id": 35, "subject": "subject 1", "image": "img/gallery/thumbs/thumb_1.png"},
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