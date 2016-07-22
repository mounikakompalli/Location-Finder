
angular.module("LocationFinder.services",[]).service("LocationFinderAppService",function($http){

	this.getSearchData = function(lat,long){
		
		var webServiceUrl = "/places/"+lat+"/"+long;
		
		return $http.
		get(webServiceUrl).
        	then(function(response) {
            	return response;
        	}, function(response) {
            	alert("Error finding data");
       	 	});
	};
})