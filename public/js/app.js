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
        .when("/locations/:placeId", {
            templateUrl: "templates/locationDetail.html",
            controller: "LocationDetailController"
        })
        .otherwise({
            redirectTo: "/"
        })
});
