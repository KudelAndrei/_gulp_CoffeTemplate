$(function() {

	// ВЫравнивание блоков по высоте
	$(".machine-item").equalHeights();
//	$("a.articles-item ").equalHeights();

	// карусель новостей
	$(".owl-articles").owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
	});

	// карусель инстаграма
	$(".owl-instagram").owlCarousel({
		loop:true,
		center: true,
		responsive:{
        1200:{ items: 5 },
				1000:{ items: 4 },
				700:{ items: 3 },
				500:{ items: 2 },
				300:{ items: 1 }
				}
	});

	//* попап окна *//
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
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



	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
