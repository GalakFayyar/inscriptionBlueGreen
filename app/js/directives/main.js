(function() {
	'use strict';

	/* Directives */

	angular.module('inscriptionBG').directive('directiveEvalCodeAngularJs', directiveEvalCodeAngularJs);
	angular.module('inscriptionBG').directive('uiSelectWrap', uiSelectWrap);
	angular.module('inscriptionBG').directive('ngReallyClick', reallyClick);

	function directiveEvalCodeAngularJs ($compile, $parse) {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				scope.$watch(attr.content, function() {
					element.html($parse(attr.content)(scope))
					$compile(element.contents())(scope)
				}, true)
			}
		}
	}

	function uiSelectWrap ($document, uiGridEditConstants) {
		return {
			restrict : 'A',
			link: function(scope, element, attr) {
				$document.on('click', docClick);
				function docClick(evt) {
					if ($(evt.target).closest('.ui-select-container').size() === 0) {
						scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
						$document.off('click', docClick);
					}
				}
			}
		}
	}

	/* Confirmation d'opérations */
	/* http://plnkr.co/edit/DgE5eGGmGebQfWunhqqv?p=preview */
	function reallyClick ($modal) {
		var ModalInstanceCtrl = function($scope, $modalInstance) {
			$scope.ok = function() {
				$modalInstance.close();
			};

			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		};

		return {
			restrict: 'A',
			scope:{
				ngReallyClick:"&",
				item:"="
			},
			link: function(scope, element, attrs) {
				element.bind('click', function() {
					var message = attrs.ngReallyMessage || "Êtes-vous sûr ?";

					var modalHtml = '<div class="modal-header"><h3 class="modal-title">Confirmer l\'opération</h3></div>';
					modalHtml += '<div class="modal-body">' + message + '</div>';
					modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Annuler</button></div>';

					var modalInstance = $modal.open({
						template: modalHtml,
						controller: ModalInstanceCtrl
					});

					modalInstance.result.then(function() {
						scope.ngReallyClick({item:scope.item}); //raise an error : $digest already in progress
					}, function() {
						//Modal dismissed
					});
				});
			}
		}
	}
})();