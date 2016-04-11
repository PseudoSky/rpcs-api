/* Sensor Class Declaration */

var Sensor = mongoose.model('Sensor', {
	name: String,
	fullname:String,
	description: String,
	active: {type:Boolean,default:true}
});

/* Model Functions */

exports.index = function (callback) {
	
	Sensor.find(function (error, sensors) {
		if (error) {
			return console.error(error);
		}
		
		callback(sensors);
	});

}

exports.show = function (name, callback) {
	
	Sensor.find({
		name: name
	}, function (error, sensors) {
		if (error) {
			return console.error(error);
		}
		
		callback(sensors);
	});

}

exports.create = function (name, description, active, callback) {

	var sensor = new Sensor({
		name: name,
		description: description,
		active: active
	});

	sensor.save(function (error) {
		if (error) {
			console.error(error);
		}
		
		callback();
	});

}

exports.insert = function (record, callback) {
	var value = new Sensor(record);
	if(value.value!=0){
		value.save(function (error) {
			if (error) {
				console.error(error);
			}
			if(callback){
				callback();
			}else{
				return 1;
			}
		});
	}
}

exports.truncate = function (callback){
	Sensor.remove({},callback);
}