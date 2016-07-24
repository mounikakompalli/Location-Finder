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
	
	
	$scope.scrollTo = function (id) {
	    var old = $location.hash();
	    $location.hash(id);
	    $anchorScroll();
	    $location.hash(old);
	  }
	
	$scope.closeAllMarkers = function removeMarkers(){
	    for(i=0; i<$scope.allMarkers.length; i++){
	        $scope.allMarkers[i].setMap(null);
	    }
	};
	
	$scope.searchClicked = function(zipCode){


		var geoCoder = new google.maps.Geocoder();

		geoCoder.geocode({address:zipCode},function(results_array,status){

			var lattitude = results_array[0].geometry.location.lat();
			var longitude = results_array[0].geometry.location.lng();

			LocationFinderAppService.getLocationData(lattitude,longitude).then(function(response){

				console.log("response",response.data);
				$scope.searchData = response.data.results;
			});

		});
	};
	
	 $scope.infoWindow = new google.maps.InfoWindow();
	 
	 $scope.allMarkers = [];	 
	$scope.getPlaceDetails = function(locationId){
		
		$scope.closeAllMarkers();
		LocationFinderAppService.getPlaceDetailId(locationId).then(function(response){

			console.log("response",response.data);
			var place = response.data.result;
			$scope.marker = new google.maps.Marker({
			              map: $scope.map,
			              position: place.geometry.location
			 });
			
			 $scope.allMarkers.push($scope.marker);			 
			 $scope.infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
		       
			                place.formatted_address + '<br>' + place.international_phone_number  + '</div>');
			 $scope.infoWindow.open($scope.map, $scope.marker);
		 
			 google.maps.event.addListener($scope.marker, 'click', function() {
			       $scope.infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
		               
			                place.formatted_address+ '<br>' + place.international_phone_number  + '</div>');
			       $scope.infoWindow.open($scope.map, this);
			 });
			 
			 document.getElementById('map').scrollIntoView();
			 	
		});
	}	
}])