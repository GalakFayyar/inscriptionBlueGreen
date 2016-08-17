(function() {
	'use strict';

	/* Config */
	angular.module('inscriptionBG').factory('ConfigService', ConfigService);

	ConfigService.$inject = ['$resource', 'inscriptionBGConfig'];
	function ConfigService ($resource, inscriptionBGConfig) {
		return $resource(inscriptionBGConfig.api.url + 'conf', {}, {
			getConfig : {
				method : 'GET'
			}
		});
	}
})();