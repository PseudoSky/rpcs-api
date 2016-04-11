var sensors = require("../models/sensors.js");

exports.init = function (app) {

	app.get("/seed/sensors", seed);
	app.get("/sensors/:sensorID?", getSensors);
	app.post("/sensors", postSensor);
	// app.get("/sensors", getAllSensor);

}

var seed = function(request,response){
	var seed_sensors=require("../models/seed/sensors");
	console.log('Sensor seeds',seed_sensors);
	sensors.truncate(function(){
		for(var i in seed_sensors){
			sensors.insert(seed_sensors[i]);
		}
		response.send('Seeded')
	})

}

var getSensors = function (request, response) {

	if (request.params.sensorID != undefined) {
		
		sensors.show(request.params.sensorID, function (sensors) {
			response.send(sensors);
		});
		
	} else {
		
		sensors.index(function (sensors) {
			response.send(sensors);
		});
		
	}

}

var postSensor = function (request, response) {

	var name = request.body.name;
	var description = request.body.description;
	var active = request.body.active;
	
	sensors.create(name, description, active, function () {
		response.send("Added Sensor to the System");
	});

}