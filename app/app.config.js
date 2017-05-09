(function(){
	'use strict';
	angular
	.module('pingpongapp')
	.config(['$locationProvider' ,'$routeProvider',
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
			 	when('/home', {
		          template: '<home-component></home-component>'
		        }).
		        when('/draw', {
		          template: '<draw-component></draw-component>'
		        }).
		        when('/teams', {
		          template: '<teams-List-component></teams-List-component>'
		        }).
		         when('/rules', {
		          template: '<rules-component></rules-component>'
		        }).
		        otherwise('/home');
		}

		]);
})();