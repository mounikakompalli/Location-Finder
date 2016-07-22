var locationSearchApp = angular.module("LocationFinder", [
]);
locationSearchApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "templates/search.html",
        controller: "LocationSearchController"
    })
});