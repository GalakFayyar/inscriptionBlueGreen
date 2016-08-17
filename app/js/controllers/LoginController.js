(function() {
	'use strict';

	angular.module('inscriptionBG').controller('LoginController', LoginController);

	LoginController.$inject = ['$scope', '$rootScope', '$location', '$cookieStore', 'UserService', '$state', 'ngProgress'];
	function LoginController ($scope, $rootScope, $location, $cookieStore, UserService, $state, ngProgress) {	
		// initialisation des variables locales
		$scope.username = '';
		$scope.password = '';

		$rootScope.user = {
			selected : null
		};

		$scope.clubs = [
			{icon: "<img src='http://www.isp-nl-golf.com/listes/304/asodet.png' />", name: "L'Odet", selected: true},
			{icon: "<img src='http://www.isp-nl-golf.com/listes/814/asgpo.jpg' />", name: "Ploemeur", selected: false},
			{icon: "<img src='http://www.isp-nl-golf.com/listes/744/logo-queven.jpeg' />", name: "Queven", selected: false},
			{icon: "<img src='http://www.isp-nl-golf.com/listes/710/logo-rhuys.jpg' />", name: "Rhuys", selected: false},
			{icon: "<img src='http://www.isp-nl-golf.com/listes/711/asbaden.jpg' />", name: "Baden", selected: false},
			{icon: "<img src='http://www.isp-nl-golf.com/listes/260/logo-lacauduc.jpg' />", name: "Lacauduc", selected: false}
		];
		
		$scope.login = function() {
			$state.go('dashboard');

			// BOUCHON DEV
			// UserService.authenticate({}, {username: $scope.username, password: $scope.password}, function (authenticatedUser) {
			// 	console.log(authenticatedUser);
			// 	if (authenticatedUser.data && authenticatedUser.data.authenticated) {
			// 		console.log('authentication succesful');
			// 		$rootScope.user = authenticatedUser;

			// 		if ($scope.rememberMe) {
			// 			$cookieStore.put('inscriptionBGUser', $rootScope.user);
			// 		}

			// 		$state.go('dashboard');
			// 	} else {
			// 		console.log('authentication failed');
			// 		$scope.authentication = {
			// 			status: 'failed',
			// 			message: 'Votre numéro de licence n\'est pas valide.'
			// 		};
			// 	}
			// }, function (message) {
			// 	console.log(message);
			// });
		};

		ngProgress.complete();
	}
})();