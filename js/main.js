$(document).ready(function(){

/*-----------------Language-toggle-button-----------------*/

	$(".language-block-item.ru").click(function(){
		$(".language-block-item.ru").addClass("active");
		$(".language-block-item.eng").removeClass("active");
	})

	$(".language-block-item.eng").click(function(){
		$(".language-block-item.eng").addClass("active");
		$(".language-block-item.ru").removeClass("active");
	})

	$(document).ready(function(){
	 	$(".owl-carousel").owlCarousel({
	 		items: 1,
	 		loop: true,
	 		smartSpeed: 600,
	 		autoplay: true,
	 		autoplayTimeout: 5000
	 	});
	});

});

	
