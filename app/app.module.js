(function() {
	'use strict';
	$('.nav.navbar-nav > li').on('click', function(e) {
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
	}); 

	angular.module('pingpongapp', [
		'ngRoute',
		'draw',
		'rules',
		'home',
		'teamsList'
		]);
})();
