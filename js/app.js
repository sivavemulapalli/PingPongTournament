(function() {
	'use strict';
	var pingpongapp = angular.module('pingpongapp', ['ngRoute']);

	pingpongapp.config(['$locationProvider','$routeProvider', 
		function config($locationProvider,$routeProvider) {
			$locationProvider.html5Mode(true);
			 $routeProvider.
			 	when('/home', {
		          templateUrl: 'pages/index.html'
		        }).
		        when('/draw', {
		          templateUrl: 'pages/draw.html'
		        }).
		        when('/rules', {
		          templateUrl: 'pages/rules.html'
		        }).
		        when('/rules', {
		          templateUrl: 'pages/rules.html'
		        }).
		        when('/rules', {
		          templateUrl: 'pages/rules.html'
		        }).
		        otherwise(redirectTo('/home'));
    }

		
	}])


})();
