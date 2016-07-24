var locationSearchApp = angular.module("LocationFinder", [
	"LocationFinder.services",
    "LocationFinder.controllers",
    "ngRoute"
]);

locationSearchApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
	  	$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
			
			if(oldRoute.loadedTemplateUrl == "templates/book-form.html")
			{
				$location.hash('book-from');
    			$anchorScroll();
			}
			else
			{
				$location.hash('body-container');
    			$anchorScroll();
			}
	  	});
})

locationSearchApp.config(function($routeProvider) {
    
	$routeProvider
    .when("/", {
        templateUrl: "templates/search.html",
        controller: "LocationSearchController"
    });
});