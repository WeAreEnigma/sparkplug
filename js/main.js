(function($) {
	$(document).ready(function() {
		"use strict";
		
		
			
		
		// HAMBURGER MENU
		$('.hamburger-menu').on('click', function(e) {
			$(this).toggleClass("open")
			$(".hamburger-menu-box").toggleClass("show-me")
			});
		$('.nav-link').on('click', function(e) {
			$("hamburger-menu-box").toggleClass("close")
			// $(".hamburger-menu-box").toggleClass("hide-me")
			});


		// $('.search-btn').on('click', function(e) {
		// 	$(".search-box").toggleClass("show-me")
		// 	});
	
	
	
		// STICKY NAVBAR
		$(window).on("scroll touchmove", function (e) {
		$('.navbar').toggleClass('stick-me', $(document).scrollTop() > 1);
		
		});	

	
		
		//Toggle Div
		$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});


		// TREE MENU
		$('.hamburger-menu-box .menu .navbar-nav .nav-item .nav-link').click(function (e) {
			$(this).parent().children('.hamburger-menu-box .menu .navbar-nav .nav-item ul').slideToggle(300);
			return true;
	  	});



		// PAGE TRANSITION
		$('.transition').on('click', function(e) {
		$('.transition-overlay').toggleClass("show-me");
		});
		
		
		// TRANSITION DELAY
		$('.transition').on('click', function(e) {
			e.preventDefault();                  
			var goTo = this.getAttribute("href"); 
			setTimeout(function(){
			window.location = goTo;
			},1000);       
			});

				
		});
	

	
		
$('[data-toggle=datepicker]').each(function() {
  var target = $(this).data('target-name');
  var t = $('input[name=' + target + ']');
  t.datepicker({
    dateFormat: 'yy-mm-dd',
  });
  $(this).on("click", function() {
    t.datepicker("show");
  });
});

   jQuery(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();
  
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'index.html';
  }
      
  var target = $('nav a[href="'+path+'"]');
  // Add active class to target link
  target.addClass('active');
});


$(document).ready(function() {
  $(".delete").hide();
  //when the Add Field button is clicked
  $("#add").click(function(e) {
    $(".delete").fadeIn("1500");
    //Append a new row of code to the "#items" div
    $("#items").append(
      '<tr><td><div class="row m-t m-b"><div class="col-md-6 right-t"><h5>Issue Date :</h5></div><div class="col-md-6 left-t"><form id="form3" name="form" class="form-inline"><div class="form-group" style="width:100%;"><input class="mainLoginInput" id="startDate3" name="startDate" type="text" class="form-control" placeholder="DD-MM-YYYY" disabled/></div></form></div></div></td><td><div class="row m-t m-b"><div class="col-md-6 right-t"><h5>Expiration Date :</h5></div><div class="col-md-6 left-t"><form id="form3" name="form" class="form-inline"><div class="form-group" style="width:100%;"><input class="mainLoginInput" id="startDate3" name="startDate" type="text" class="form-control" placeholder="DD-MM-YYYY" disabled/></div></form></div></div></td></tr>'
    );
  });
  $("body").on("click", ".delete", function(e) {
    $(".next-referral").last().remove();
  });
});
	
// 7838396168
		
})(jQuery);

		