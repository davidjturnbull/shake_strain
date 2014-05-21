var recipeServices = angular.module('recipeServices', ['ngResource']);

recipeServices.factory('Recipe', ['$resource',
  function($resource){
    return $resource('recipes/:recipeId.json', {}, {
      query: {method:'GET', params:{recipeId:'recipes'}, isArray:true}
    });
  }]);