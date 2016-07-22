angular.module("LocationFinder.controllers",[]).controller("LocationSearchController",['$scope','$location','LocationFinderAppService',function($scope,$location,LocationFinderAppService){

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