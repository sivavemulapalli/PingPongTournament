(function() {
	'use strict';
	$('.nav.navbar-nav > li').on('click', function(e) {
    $('.nav.navbar-nav > li').removeClass('active');
    $(this).addClass('active');
	}); 

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
		         when('/rules', {
		          templateUrl: 'pages/rules.html'
		        }).
		        otherwise({
		        	redirectTo:'/'
		        });
    	}
	);


	pingpongapp.controller('teamsController', function($scope) {
		$scope.teams = [
			{
				name:'Serves You Right',
				player1:'Srinivas Raj',
				player2:'Mike Surges',
				charity:'Alpine Rescue Team',
				charitywebsite: 'https://www.coloradogives.org/alpinerescue/overview'
			},
			{
				name:'Neaux',
				player1:'Charlie BlackStock',
				player2:'Brad Scharmann',
				charity:'The Ability Experience',
				charitywebsite: 'http://www.abilityexperience.org/'
			},
			{
				name:'Mboat',
				player1:'Zach Molden',
				player2:'Julian Lobert',
				charity:'No Kill Colorado',
				charitywebsite: 'https://nokillcolorado.org/'
			},
			{
				name:'Slacker',
				player1:'Will Acosta',
				player2:'Terry Widamayer',
				charity:'',
				charitywebsite:''
			},
			{
				name:'LaserBeam',
				player1:'Bittu',
				player2:'Siva',
				charity:'Alpine Rescue Team',
				charitywebsite:'https://www.coloradogives.org/alpinerescue/overview'

			},
			{
				name:'Pongisthan',
				player1:'Billy Johnson',
				player2:'Sushant Mittal',
				charity:'Denver Scholarship Foundation',
				charitywebsite:'https://denverscholarship.org/'
			},
			{
				name:'Robam',
				player1:'Rob Hill',
				player2:'Adam Oliver',
				charity:"Children's Miracle Network Hospitals",
				charitywebsite:'https://childrensmiraclenetworkhospitals.org/?utm_referrer=https%3A%2F%2Fwww.google.com%2F'
			},
			{
				name:'Fine Whines',
				player1:'Butch Clark',
				player2:'Julia Moran Meland',
				charity: 'Dumb Friends League',
				caritywebsite:'http://www.ddfl.org/'
			},
			{
				name:'Cyber Destroyers',
				player1:'Mike Porier',
				player2:'Mills Mcilroy',
				charity:'Operation Underground Railroad',
				charitywebsite:'https://ourrescue.org/'
			},
			{
				name:'Manvis',
				player1:'Mani Sundaram',
				player2:'Travis Cole',
				charity:'Denver Urban Scholars',
				charitywebsite:'http://denverurbanscholars.org/'
			},
			{
				name:'Team Morale',
				player1:'Kevin Clark',
				player2:'Steven Bao',
				charity:'The Edwards Fondation for Rescued Animals',
				charitywebsite:'http://www.edwardsanimals.com/'
			},
			{
				name:'Swat Team',
				player1:'Ryan Pando',
				player2:'David Rhodes',
				charity:"Children's Miracle Network Hospitals",
				charitywebsite:'https://childrensmiraclenetworkhospitals.org/?utm_referrer=https%3A%2F%2Fwww.google.com%2F'
			},
			{
				name:'KillerSpin',
				player1:'Phil Hurwitz',
				player2:'Larry Carden',
				charity:'Dumb Friends League',
				charitywebsite:'http://www.ddfl.org/'
			},
			{
				name:'Beers and Steers',
				player1:'Will Zhou',
				player2:'Sam Lewis',
				charity:'Charity Water',
				charitywebsite:'https://www.charitywater.org/'
			},
			{
				name:'BYOP',
				player1:'Lucy Follansbee',
				player2:'Zach Schulz',
				charity:"Alzheimer's Association",
				charitywebsite:' http://www.alz.org/'
			},
			{
				name:'Trout Unlimited',
				player1:'Casey Burnett',
				player2:'JC Wheatley',
				charity:'Trout Unlimited',
				charitywebsite:'http://www.tu.org/'
			},
			{
				name:'SPEW',
				player1:'Will Thomas',
				player2:'Austin McKinley',
				charity:'Cat Care Society',
				charitywebsite:'http://www.catcaresociety.org/'
			},
			{
				name:'Voldemort',
				player1:'Daniel Broadbent',
				player2:'Jon Casey',
				charity:'No Kill Colorado',
				charitywebsite:'https://nokillcolorado.org/'

			},
			{
				name:'Underdogs',
				player1:'Kelsey Karraker',
				player2:'Cappy Hausfeld',
				charity:'Girls, Inc.',
				charitywebsite:'http://www.girlsinc.org/about/about-girls-inc.html'
			}
		];
			
	});


})();
