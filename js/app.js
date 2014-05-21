 'use strict';
  
  /* App Module */
 
 var specApp = angular.module('specApp', [
   'ngRoute',
   'recipeControllers',
   'recipeServices'
 ]);
 
 specApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/recipes', {
         templateUrl: 'partials/recipe-list.html',
         controller: 'RecipeListCtrl'
       }).
       when('/recipes/:recipeId', {
         templateUrl: 'partials/recipe-detail.html',
         controller: 'RecipeDetailCtrl'
       }).
       when('/about', {
         templateUrl: 'partials/about.html'
       }).
       otherwise({
         redirectTo: '/recipes'
       });
   }]);