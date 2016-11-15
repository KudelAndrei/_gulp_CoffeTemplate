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
	/*//Слайдер  https://gist.github.com/KudelAndrei/fca3e6e73e1e0aa21996a12af58c9069
	$(".sl").slick({
		arrows: true,
		dots: true,
	});
*/
	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
