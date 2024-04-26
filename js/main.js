
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		
		/*=====================================
			Date Picker JS
		======================================*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*=====================
			Video Popup JS
		=======================*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		/*====================
			USED IN MyMap
		======================*/
		// var map = new GMaps({
		// 		el: '#map',
		// 		lat: 23.011245,
		// 		lng: 90.884780,
		// 		scrollwheel: false,
		// 	});
		// 	map.addMarker({
		// 		lat: 23.011245,
		// 		lng: 90.884780,
		// 		title: 'Marker with InfoWindow',
		// 		infoWindow: {
		// 		content: '<p>welcome to Medipro</p>'
		// 	}
		
		// });
	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);


const star = document.querySelectorAll(".star")



star.forEach(sta =>{
    sta.addEventListener('click',()=>{
        const color =parseInt(sta.getAttribute("data-value"));
        activeStar(color);

    });
});



function activeStar(color){
    star.forEach((star, index) =>{
        if(index <color){
            star.classList.add('active');

        }else{
            star.classList.remove('active');
        }
    });


}



// THIS IS FOR SINGLE SCROLL WEBSITE

document.querySelectorAll('a[href^="."]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		
		const className = this.getAttribute('href');
		const section = document.querySelector(className);
		
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	});
});



function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
  }
  function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
	
  }




//   MY MODALS FOR EP
       // Get references to elements
	   const modal = document.getElementById("myModal");
	   const openModalBtn = document.getElementById("openModalBtn");
	   const closeModalBtn = document.getElementById("closeModalBtn");

	   // Function to open the modal
	   openModalBtn.addEventListener("click", () => {
		   modal.style.display = "flex";
	   });

	   // Function to close the modal
	   closeModalBtn.addEventListener("click", () => {
		   modal.style.display = "none";
	   });

	   // Close the modal when clicking outside the content
	   modal.addEventListener("click", (event) => {
		   if (event.target === modal) {
			   modal.style.display = "none";
		   }
	   });



//   MY MODALS OFFICER
     // Get references to elements
	 const modalEP = document.getElementById("myModalEP");
	 const openModalBtnEP = document.getElementById("openModalBtnEP");
	 const closeModalBtnEP = document.getElementById("closeModalBtnEP");
	 // Function to open the modal
	 openModalBtnEP.addEventListener("click", () => {
	   modalEP.style.display = "flex";
	 });
	 // Function to close the modal
	 closeModalBtnEP.addEventListener("click", () => {
	   modalEP.style.display = "none";
	 });
	 // Close the modal when clicking outside the content
	 modalEP.addEventListener("click", (event) => {
	   if (event.target === modalEP) {
		   modalEP.style.display = "none";
	   }
	 });



// APPLY NOW BUTTON TO 950

const redirectBtn = document.getElementById("redirectBtn");

        // Add a click event listener to the button
        redirectBtn.addEventListener("click", () => {
            // Redirect to the specified URL
            window.location.href = "404.html"; // The target URL
        });


const redirectBtnEP = document.getElementById("redirectBtnEP");

        // Add a click event listener to the button
        redirectBtnEP.addEventListener("click", () => {
            // Redirect to the specified URL
            window.location.href = "404.html"; // The target URL
        });

