/*
Author       : sellerend
Template Name: Directory listing template
Version      : 1.0
*/

(function($) {
	'use strict';
	/*START SWIPER JS*/

	new WOW().init();

	// loader
	$(window).on( "load", function() {
		$('.preloader').fadeOut(1000);
	});

	$(document).ready(function() {
		$('.region_or_country').select2();
		$('.city_of_participation').select2();
	});
	  
	/*END SWIPER JS*/	

	var fixed_top = $("#menu_section");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			fixed_top.addClass("sticky-menu animated fadeInDown");
		} else {
			fixed_top.removeClass("sticky-menu animated fadeInDown");
		}
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').css({
				'bottom': '2%',
				'opacity': '1',
				'transition': 'all .5s ease'
			});
		} else {
			$('.scrollToTop').css({
				'bottom': '-30%',
				'opacity': '0',
				'transition': 'all .5s ease'
			})
		}
	});

	//Click event to scroll to top
	$('a.scrollToTop').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	 

	$(document).ready(function(){
		$(".mobile_menu_top_right span").click(function(){
		$(".mobile_menu_top_right").toggleClass("close");
			$(".mobile_menu_bottom").toggleClass("open");
		});
	});
		
	$(".main_mobile_menu ul li ul").parent("li").addClass("mobile_drowpdown");
	$('.main_mobile_menu ul li a').on('click', function(e) {
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp("swing");
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown("swing");
			element.siblings('li').children('ul').slideUp("swing");
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp("swing");
		}
	});		

	//  my account
	$("#search_icon i").on("click", function() {
		$(".search_box").toggleClass("toggleSearch")
	})
	$(".close_btn").on("click", function() {
		$(".search_box").removeClass("toggleSearch")
	})

	// for expand button toggle
	$(".expand_btn").on("click", function() {
		$(".course_purchase_list").css({"display": "none"})
		$(".expand_btn").css({
			'display': 'none'
		})
		$(".Collapse_btn").css({
			"display": "block"
		})
	})
	$(".Collapse_btn").on("click", function() {
		$(".course_purchase_list").css({"display": "block"})
		$(".expand_btn").css({
			'display': 'block'
		})
		$(".Collapse_btn").css({
			"display": "none"
		})
	})


	// password
	$(".view_icon").on("click", function () {
		const targetId = $(this).data("target");
		const input = document.getElementById(targetId);
	  
		if (input.type === "password") {
		  input.type = "text";
		  $(this).text("🙈"); // optional: change icon
		} else {
		  input.type = "password";
		  $(this).text("👁️");
		}
	  });
	  
	// Select all collapsible elements inside your accordion
	const collapses = document.querySelectorAll('.accordion-collapse');

	collapses.forEach(collapseEl => {
		const headerEl = collapseEl.previousElementSibling; // This assumes .course_purchase_list_item is just before .accordion-collapse
	
		collapseEl.addEventListener('show.bs.collapse', () => {
			headerEl.classList.add('db_acc_active');
		});
	
		collapseEl.addEventListener('hide.bs.collapse', () => {
			headerEl.classList.remove('db_acc_active');
		});
	});
	

	//  quiz dashboard
	$(".quiz_toggle").on("click", function(){
		$(".quiz_sidebar_inner").addClass("close_sidebar")
		$(".quiz_dashboard_main").addClass("full_with")
		$(".quiz_sidebar_right_arrow").addClass("right_arrow") 
	})

	$(".quiz_sidebar_right_arrow").on("click", function(){
		$(".quiz_sidebar_inner").removeClass("close_sidebar")
		$(".quiz_dashboard_main").removeClass("full_with")
		$(".quiz_sidebar_right_arrow").removeClass("right_arrow")
	})
	$(".author_action").on("click", function(){ 
		$(".author_action_list").toggleClass("author_action") 
	})



	// =============== Multi step form ==============
	 
  $(document).ready(function () {
    let currentStep = 0;
    const steps = $(".step");

    function showStep(index) {
      steps.hide().eq(index).show();
    }

    $(".next-btn").click(function () {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });

    $(".prev-btn").click(function () {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });

    $("#multi-step-form").submit(function (e) {
      e.preventDefault();
      alert("Form submitted!");
    });

    showStep(currentStep); // Initialize
}); 




})(jQuery);


