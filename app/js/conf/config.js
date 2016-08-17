(function() {
	'use strict';

	/* Config */

	angular.module('inscriptionBG').constant('inscriptionBGConfig', {
		'version': '0.0.1',
		'api': {
			'url': 'http://91.121.133.203:8077/api/'
		},
		'activateLogging': true,
		'timeoutAlertMessages': 5000
	});
})();
