var recipeControllers = angular.module('recipeControllers', []);

recipeControllers.controller('RecipeListCtrl', ['$scope', 'Recipe',
	function($scope, Recipe) {
		$scope.recipes = Recipe.query();

	}]);

recipeControllers.controller('RecipeDetailCtrl', ['$scope', '$routeParams', 'Recipe',
	function($scope, $routeParams, Recipe) {
		$scope.recipe = Recipe.get({recipeId: $routeParams.recipeId}, function(recipe) {

		});
	}]);