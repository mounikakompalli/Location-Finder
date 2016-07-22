var locationSearchApp = angular.module("LocationFinder", [
	"LocationFinder.services",
    "LocationFinder.controllers",
    "ngRoute"
]);
locationSearchApp.config(["$httpProvider",function($httpProvider,$routeProvider) {
    
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
	$routeProvider
    .when("/", {
        templateUrl: "templates/search.html",
        controller: "LocationSearchController"
    })
}]);