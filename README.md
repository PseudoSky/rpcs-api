# UDBS Air Quality Sensor

This is the server side package used for processing and serving sensor data between the hardware and Web Endpoint.

![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/physical/hardware.jpg)

## References:

Server		https://github.com/PseudoSky/udbs-air-sense

Client		https://github.com/PseudoSky/sense-ui

## Dependencies:

Arduino Uno

Nodejs		https://nodejs.org/en/
Mongodb	https://www.mongodb.org/
Git		https://git-scm.com/


## Install:

```
mkdir udbs
cd udbs
git clone https://github.com/PseudoSky/udbs-air-sense

npm install -g yo grunt bower grunt-cli

cd udbs-air-sense

mongod

# Open new shell window to same dir

npm install

node server.js
```

## Use:

Open a browser and go to http://localhost:50000/seed
This will add the test seed data that we gathered from the sensor to the MongoDB instance.



	app.get("/values/since/:timestamp", getValuesSince);
	app.get("/values/:sensorID?", getValues);
	app.post("/values", postValue);
	app.get("/seed",seed)


# API Endpoints

### /seed

Endpoint for seeding the initial local database
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/seed.png)

### /values

Endpoint for all values from all sensors
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values.png)

### /values/since/2015-12-14T14:07:41.939Z

Endpoint for all sensor data after timestamp
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-since.png)

Endpoint for butane sensor readings

### /values/ch4

Endpoint for methane
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-ch4.png)

### /values/co

Endpoint for carbon monoxide
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-co.png)

### /values/h

Endpoint for humidity
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-h.png)

### /values/lpg

Endpoint for butane/propane
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-lpg.png)

### /values/lux

Endpoint for light intensity
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-lux.png)

### /values/p

Endpoint for atmospheric pressure
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-p.png)


### /values/t

Endpoint for temperature in Celcius
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-t.png)

### /sensors

Lists all sensors
NOT YET IMPLEMENTED
