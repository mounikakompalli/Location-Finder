
angular.module("LocationFinder.services",[]).service("LocationFinderAppService",function($http){

	this.getLocationData = function(lat,long){
		
		var webServiceUrl = "/locationsAround/"+lat+"/"+long;
		
		return $http.
		get(webServiceUrl).
        	then(function(response) {
            	return response;
        	}, function(response) {
            	alert("Error finding data");
       	 	});
	};
	
	this.getPlaceDetailId = function(locationId){
				
		var url = "/locationDetails/"+locationId;
	
    	return $http.
		get(url).
        	then(function(response) {
            	return response;
        	}, function(response) {
            	alert("Error finding data");
       	 	});
	}
	
	
	
})