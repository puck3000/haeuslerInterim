$(function() {  
   $('.main-gallery').flickity({
   		contain: true,
   		imagesLoaded: true,
   		prevNextButtons: false,
		pageDots: false,
		wrapAround: true,
		autoPlay: 4000,
		draggable: false,
		lazyLoad: true,
		// setGallerySize: false,
		// cellAlign: 'center'
	});
});