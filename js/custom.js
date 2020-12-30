/*--
	Main JS file for Greek Startup Universe whole website
--*/

// Add class "scrolled to navbar when user scrolls so that the background & text color can change"
$(window).scroll(function(){

	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

});

$( document ).ready(function() {

	$('.partners-carousel').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 1600,
	  	arrows: false,
	  	slidesToShow: 8,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 2000,
	  	responsive: [
	    	{
		      	breakpoint: 992,
		      	settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		 		breakpoint: 768,
		      	settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		      	breakpoint: 576,
		      	settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
		      	}
	    	},
	    	{
		      	breakpoint: 400,
		      	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		      	}
	    	}
	  ]
	});

	$('.community-partners-carousel').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 800,
	  	arrows: false,
	  	slidesToShow: 8,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 1000,
	  	responsive: [
	    	{
		      	breakpoint: 992,
		      	settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		 		breakpoint: 768,
		      	settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		      	breakpoint: 576,
		      	settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
		      	}
	    	},
	    	{
		      	breakpoint: 400,
		      	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		      	}
	    	}
	  ]
	});

});