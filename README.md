# UDBS Air Quality Sensor

This is the server side package used for processing and serving sensor data between the hardware and Web Endpoint.

![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/physical/hardware.png)

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


![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-since.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values.png)

![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-ch4.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-co.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-h.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-lpg.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-lux.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-p.png)
![](https://github.com/PseudoSky/udbs-air-sense/blob/master/docs/images/values-t.png)
