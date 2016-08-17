(function() {
	'use strict';

	/* Controllers */

	angular.module('inscriptionBG').controller('MainController', MainController);
	angular.module('inscriptionBG').controller('HeaderController', HeaderController);
	angular.module('inscriptionBG').controller('FooterController', FooterController);

	MainController.$inject = ['$scope', 'ngProgress'];
	function MainController ($scope, ngProgress) {
		$scope.competitions = [
			{id:629, name:"COUPE MAIRIE DE CLOHARS FOUESNANT", type:"1ère série STKP - aut", tranchesHoraires:"2", categorie:"Public", date:"2016-08-21", inscrits:21, places:126, selected:true, },
			{id:904, name:"9 TROUS COUPE MAIRIE DE CLOHARS FOUESNANT", type:"1ère série STKP - aut", tranchesHoraires:"2", categorie:"Public", date:"2016-08-21", inscrits:21, places:126, selected:false}
		];

		$scope.tranchesHoraires = {
			selected: {},
			list: [
				{value:1},
				{value:2}
			]
		};
		$scope.tranchesHoraires.selected = $scope.tranchesHoraires.list[0].value;

		$scope.inscrits = [
			{
				numInscription: 1,
				statut: "è ins",
				trancheHoraire: 1,
				nom: "FALCHER",
				prenom: "Christine",
				as: 1,
				club: "304 L'ODET",
				commentaire: "cool"
			},
			{
				numInscription: 1,
				statut: "è ins",
				trancheHoraire: 1,
				nom: "FALCHER",
				prenom: "Louis",
				as: 1,
				club: "304 L'ODET",
				commentaire: "cool 2"
			}
		];

		$scope.grid = {
			competitions: {
				enableSorting: true,
				minRowsToShow: 4,
				columnDefs: [
					{ name: 'id', displayName: 'N°', enableSorting: false, width: 50 },
					{ name: 'name', displayName: 'Intitulé', width: 300 },
					{ name: 'type', displayName: 'Type' },
					{ name: 'tranchesHoraires', displayName: 'Tranche Horaire' },
					{ name: 'categorie', displayName: 'Public / Club' },
					{ name: 'date', displayName: 'Date' },
					{ name: 'nbInscrits', displayName: 'Inscrits' },
					{ name: 'nbPlaces', displayName: 'Places' }
				],
				data: $scope.competitions
			},
			inscrits: {
				enableSorting: true,
				minRowsToShow: 10,
				columnDefs: [
					{ name: 'numInscription', displayName: 'N.i', enableSorting: false, width: 50 },
					{ name: 'statut', displayName: 'Statut' },
					{ name: 'trancheHoraire', displayName: 'Tranche Horaire' },
					{ name: 'nom', displayName: 'Nom' },
					{ name: 'prenom', displayName: 'Prénom' },
					{ name: 'as', displayName: 'AS' },
					{ name: 'club', displayName: 'Club' },
					{ name: 'commentaire', displayName: 'Commentaire' }
				],
				data: $scope.inscrits
			}
		};

		ngProgress.complete();
	}

	HeaderController.$inject = ['$scope'];
	function HeaderController ($scope) {
		$scope.toto = "test";
	}

	FooterController.$inject = ['$scope', 'inscriptionBGConfig'];
	function FooterController ($scope, inscriptionBGConfig) {
		$scope.version = inscriptionBGConfig.version;
	}
})();