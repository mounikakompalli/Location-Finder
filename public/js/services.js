
angular.module("LocationFinder.services",[]).service("LocationFinderAppService",function($http){

	this.getSearchData = function(lat,long){

		var googleAPIKey = "AIzaSyCqykw3PCrky_M5n6YQ8qZhGiFlTiHy40c";
		var googleAPIUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
		googleAPIUrl+=lat+","+long+"&radius=500&key="+googleAPIKey;

		return $http.
		get(googleAPIUrl).
        	then(function(response) {
            	return response;
        	}, function(response) {
            	alert("Error finding data");
       	 	});
	};
})