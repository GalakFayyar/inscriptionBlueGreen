(function() {
	'use strict';

	/* Services */
	angular.module('inscriptionBG').factory('UserService', UserService);

	UserService.$inject = ['$resource', 'inscriptionBGConfig'];
	function UserService ($resource, inscriptionBGConfig) {
		return $resource(inscriptionBGConfig.api.url + ':action/:login', {}, {
			authenticate : {
				method : 'POST',
				params : {
					'action' : 'authenticate'
				}
			},
			logout : {
				method : 'POST',
				params : {
					'action' : 'logout'
				}
			}
		});
	};
})();