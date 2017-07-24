/**
 * @file
 * Contains JavaScript used in Swing TX-07 Left's theme.
 */

(function ($) {

	'use strict';

 /**
   * Provides the off-canvas menu.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for the off-canvas menu.
   */
    Drupal.behaviors.init_mmenu = {
    	attach: function (context) {
		  $(context).find('body').once('init_mmenu').each(function() {
			if (typeof($.mmenu) != 'undefined') {
				// Set up the off canvas menu.
				$('#main-menu').mmenu({
					"extensions": ["listview-justified"]	
				});
			}
		  });
		}
  	};

	var $menu = $("#main-menu").mmenu({
		//   options
		"extensions": ["listview-justified"]	
	});
	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
	   API.open();
	});

	API.bind( "open:finish", function() {
	   setTimeout(function() {
		  $icon.addClass( "is-active" );
	   }, 100);
	});
	API.bind( "close:finish", function() {
	   setTimeout(function() {
		  $icon.removeClass( "is-active" );
	   }, 100);
	});

	// Bootstrap tooltip.
	$('[data-toggle=tooltip]').tooltip();

	// Smooth scroll to top.
	$('#toTop a').click(function () {
		$('body,html').animate({scrollTop: 0}, 1000);
	});

	$(document).scroll(function(e){
		var target = $('.caption');
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

})(jQuery);
