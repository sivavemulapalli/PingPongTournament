(function() {
	'use strict';
	var pingpongapp = angular.module('pingpongapp', ['ngRoute']);

	pingpongapp.config(
		function config($locationProvider,$routeProvider) {
			$locationProvider.html5Mode(true);
			 $routeProvider.
			 	when('/', {
		          templateUrl: 'pages/home.html'
		        }).
			 	when('/home', {
		          templateUrl: 'pages/home.html'
		        }).
		        when('/draw', {
		          templateUrl: 'pages/draw.html'
		        }).
		        when('/teams', {
		          templateUrl: 'pages/teams.html'
		        }).
		        otherwise({
		        	redirectTo:'/'
		        });
    	}
	);


})();
