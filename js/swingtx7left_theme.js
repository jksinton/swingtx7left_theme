/**
 * @file
 * Contains JavaScript used in Swing TX-07 Left theme.
 */

(function ($) {

  'use strict';

  // Responsive main menu.
  $('#main-menu').smartmenus();

  // Main menu toggle.
  $('.navbar-toggle').click(function () {
    $('.region-primary-menu').slideToggle();
  });

  // Hide dropdown menu.
  if ($(window).width() < 768) {
    $('.region-primary-menu li a:not(.has-submenu)').click(function () {
      $('.region-primary-menu').hide();
    });
  }

  // Sliding header.
  $('.toggle-switch').click(function () {
    $('#sliding-header-wrap').slideToggle();
  });

  // Bootstrap tooltip.
  $('[data-toggle=tooltip]').tooltip();

  // Smooth scroll to top.
  $('#toTop a').click(function () {
    $('body,html').animate({scrollTop: 0}, 1000);
  });

/*
  $(document).scroll(function(e){
	var target = $('.caption div.border');
	var scrollTop = $(this).scrollTop();
	var height = target.outerHeight();
	var calc = 1 - (scrollTop - height) / height;

	target.css({ 'opacity': calc });

	if ( calc > '1' ) {
		target.css({ 'opacity': 1 });
	} else if ( calc < '0' ) {
		target.css({ 'opacity': 0 });
	}
  });
  */
})(jQuery);


