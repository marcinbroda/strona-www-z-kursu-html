(function(){

$(document).ready(function  (){


	$(window).scroll(function (){
		var scroll = $(window).scrollTop();

			if (scroll > 40 ) {
				$(".nav-holder").addClass("point");
			} else {
				$(".nav-holder").removeClass("point")
			}

	});


	var scrollTopPos = $(window).scrollTop();

	$(window).on('scroll', function() {
		scrollTopPos = $(window).scrollTop();
		enableWatcher();
	});

	function enableWatcher() {
		var prevActive = 0;
		console.log(prevActive);

		$('.section').each(function() {
			var watchSectionNow = parseInt($(this).data('id'));
			var sectionOffset = $(this).offset().top;
			var bottomOffset = sectionOffset + $(this).height();
			var hres = $("nav a").data('id');
			var hre = $("nav a");


			if (scrollTopPos > sectionOffset-100 
				&& scrollTopPos < bottomOffset) {
				if (prevActive !== watchSectionNow){
					$('nav li a').removeClass('watcher')
					$('nav li').eq(watchSectionNow - 1).find('a').addClass('watcher')
				}

			}
		});
	};
		

	$(".outbox a").on("click", function(e) {
		var target = this.hash,
			$target =$(target);
			// navMain = $(".nav-holder");
			// console.log(navMain);

			
				
			 function getPosition (){
			 		var $pos;

				if (window.innerWidth > 800) {
					$pos = 0;
				} else{
					$pos= 80;
				}
				  return $pos

			};
				
			$('html,body').stop().animate({
				'scrollTop':$target.offset().top - getPosition()

			},900,'swing', function(){

			});	

	});




		$(".button").on("click", function(e) {
			//do buttona
				if ($(".button").hasClass("button-active") && ("button-after")) {
					$(".button").removeClass("button-active"),
					$(".button").removeClass("button-after");
				} else {
					$(".button").addClass("button-active"),
					$(".button").addClass("button-after");
				}

			//do nawigacji
				$(".nav").toggleClass("active");

		});

			$( window ).resize(function() {

				if (window.innerWidth > 768) {
				//do nawigacji
					$(".nav").removeClass("active"),
				//do buttona
					$(".button").removeClass("button-active"),
					$(".button").removeClass("button-after");
				}
			 	
			});



			

		

});


})();
