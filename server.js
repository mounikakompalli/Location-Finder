
var googleAPIKey = "AIzaSyDMBaQ70diNmXfd-D1wGV1On9dB-r5RIJU";
var express = require("express");
var path = require("path");
var https = require('https');
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname+"/public"));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

app.get("/locationsAround/:latitude/:longitude", function(req, res) {
    
	var webAPIUrl = "/maps/api/place/nearbysearch/json?location=";
	webAPIUrl+=req.params.latitude+","+req.params.longitude+"&radius=200&key="+googleAPIKey;

	var options = {
	  host: 'maps.googleapis.com',
	  path: webAPIUrl
	};

	https.request(options, function(response){
		var result = '';
		response.on('data', function(chunk) {
		      result += chunk;
		   });
		
		  response.on('end', function() {
		        var parsed = JSON.parse(result);
				res.send(parsed);
		   });
		
	}).end();
});

app.get("/locationDetails/:locationId", function(req, res) {
   
	var locationWebAPIUrl = "/maps/api/place/details/json?placeid=";
	locationWebAPIUrl+=req.params.locationId+"&key="+googleAPIKey;

	var options = {
	  host: 'maps.googleapis.com',
	  path: locationWebAPIUrl
	};
	
	https.request(options, function(response){
		var result = '';
		response.on('data', function(chunk) {
		      result += chunk;
		   });
		
		  response.on('end', function() {
		        var parsed = JSON.parse(result);
				res.send(parsed);
		   });
	}).end();	
});


function allHandleErrors(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}