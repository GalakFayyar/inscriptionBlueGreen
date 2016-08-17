(function() {
	'use strict';

	angular.module('inscriptionBG', [ 
		'ngRoute',
		'ngResource',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ngAnimate',
		'ui.bootstrap',
		'ui.router',
		'ui.grid',
		'ui.grid.resizeColumns',
		'ui.grid.cellNav',
		'ui.grid.autoResize',
		'ui.grid.pagination',
		'ui.grid.edit',
		'ui.grid.rowEdit',
		'ui.grid.selection',
		'ui.grid.grouping',
		'ui.grid.exporter',
		'ui.grid.pinning',
		'ui.select',
		'ngProgress',
		'toggle-switch',
		'isteven-multi-select'
	]);
	angular.module('inscriptionBG').config(inscriptionBGConfiguration);
	angular.module('inscriptionBG').run(inscriptionBGRun);

	inscriptionBGConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'inscriptionBGConfig'];
	function inscriptionBGConfiguration ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, tinscriptionBGConfig) {
		// MVC routing patterns
		$urlRouterProvider.otherwise('/login');	// default route
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'views/common/login.html',
				controller: 'LoginController'
			})
			/******************************************************************/
			.state('app', {
				url: '/',
				templateUrl: 'views/index.html',
				controller: 'MainController'
			})
			/******************************************************************/
			.state('dashboard', {
				url: 'dashboard',
				views: {
					'content': {
						//templateUrl: 'app_edito_rubriques/views/dashboard/dashboard.tpl.html',
						templateUrl: 'views/dashboard/dashboard.html',
						controller: 'MainController'
					}
				},
				parent: 'app'
			});
		$locationProvider.hashPrefix('!');
	}

	inscriptionBGRun.$inject = ['$rootScope', '$location', '$cookieStore', '$state', '$injector', 'ngProgress'];
	function inscriptionBGRun ($rootScope, $location, $cookieStore, $state, $injector, ngProgress) {
		$rootScope.alerts = [];
		$rootScope.user = null;

		ngProgress.color('#000');
		ngProgress.height('3px');

		$rootScope.redirectLogin = function () {
			delete $rootScope.user;

			$cookieStore.remove('inscriptionBGUser');

			// redirect homepage
			//$location.path('/login');
			$state.go('login');
		};

		$rootScope.closeAlert = function (index) {
			$rootScope.alerts.splice(index, 1);
		};

		$rootScope.closeError = function () {
			delete $rootScope.error;
		};

		$rootScope.closeSuccess = function () {
			delete $rootScope.success;
		};

		$rootScope.logout = function () {
			$rootScope.redirectLogin();
		};

		$rootScope.redirect = function (env) {
			// reset chargement en cours
			//var ngProgress = $injector.get('ngProgress');
			ngProgress.reset();
			
			$state.go(env);
		};

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
			//$rootScope.showLoader = true;
			ngProgress.start();
		})

		// // Try getting valid user from cookie or go to login page
		// var originalPath = $location.path();
		// var user = $cookieStore.get('tabordngUser');
		// if (angular.isDefined(user)) {
		// 	$rootScope.user = user;
		// }

		// $rootScope.redirect('login');

		// $rootScope.initialized = true;
	}
})();