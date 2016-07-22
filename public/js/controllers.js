angular.module("LocationFinder.controllers",[]).controller("LocationSearchController",['$scope','$location','LocationFinderAppService',function($scope,$location,LocationFinderAppService){

	
	
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({address: "23508"},
	    function(results_array, status) { 
		   	
			var lat = results_array[0].geometry.location.lat();
			var lng = results_array[0].geometry.location.lng();
			var mapOptions = {
				zoom: 10,
				center: new google.maps.LatLng(lat, lng),
				mapTypeId: google.maps.MapTypeId.TERRAIN
			};

			$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
	});
	
	$scope.searchClicked = function(zipCode){

		var zipCode = "23508";

		var geoCoder = new google.maps.Geocoder();

		geoCoder.geocode({address:zipCode},function(results_array,status){

			var lattitude = results_array[0].geometry.location.lat();
			var longitude = results_array[0].geometry.location.lng();

			LocationFinderAppService.getSearchData(lattitude,longitude).then(function(response){

				console.log("response",response.data);

			});

		});
	};
}])
.controller("MapController", ['$scope', '$location', '$routeParams',
    function ($scope, $location, $routeParams) {
 
	 
}])