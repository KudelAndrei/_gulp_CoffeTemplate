$(function() {

	// ВЫравнивание блоков по высоте
	$(".machine-item").equalHeights();
	//	$("a.articles-item ").equalHeights();

	$(".btn-icon").click(function(){
		$(this).toggleClass("on");
	});


	// карусель новостей
	$(".owl-articles").owlCarousel({
		loop: false,
		animateIn: "flipInX",
		animateOut: "slideOutDown",
		responsive:{
        1200:{ items: 3 },
				620:{ items: 2 },
				310:{ items: 1 },
				}
	});
	$(".next").click(function(){
		$(".owl-articles").trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		$(".owl-articles").trigger('prev.owl.carousel');
	});

	// карусель инстаграма
	$(".owl-instagram").owlCarousel({
		loop:true,
		center: true,
		autoplay: true,
		autoplayTimeout: 6000,
		responsive:{
        1200:{ items: 5 },
				1000:{ items: 4 },
				700:{ items: 3 },
				500:{ items: 2 },
				300:{ items: 1 }
				}
	});

	//* попап окна новости *//
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

	//* попап окна товара *//
	$('.image-popup-no-margins').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	}
});

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
