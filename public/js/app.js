var locationSearchApp = angular.module("LocationFinder", [
	"LocationFinder.services",
    "LocationFinder.controllers",
    "ngRoute"
]);

locationSearchApp.config(function($routeProvider) {
    
	$routeProvider
    .when("/", {
        templateUrl: "templates/search.html",
        controller: "LocationSearchController"
    })
    .otherwise({
         redirectTo: "/",
	   	controller: "ListController"
     });
});