var users = require("../models/users.js");
var mongoose=require('mongoose');
var User=mongoose.model('User');
/*
 * Export an init method that will define a set of routes
 * handled by this file.
 * @param app - The Express app
 */
exports.model=users;
exports.init = function (app) {

	app.get("/seed/users",seed)
	app.get("/users/values/since/:timestamp", getUsersSince);
	app.get("/users/values/:user_id?", getV4U);
	app.get("/users/:user_id?",getUsers)

	app.post("/users", postUser);

}
var seed = function(req,res){
	var seed_data=require("../models/seed/users");
	users.truncate(function(){
		for(var i in seed_data){
			users.insert(seed_data[i]);
		}
		res.send('Seeded')
	})

}
var getUsersSince = function (req, res) {
	var opts=req.query;
	opts['sort']={timestamp:-1};
	opts['limit']=parseInt(req.params["limit"]||req.query.limit ||200)
	if (req.params.timestamp != undefined) {
		var ts=new Date(req.params.timestamp);
		if(ts){
			users.index_after(ts,opts, function (users) {
				res.send(users);
			});

		}else{
			res.send('Invalid Timestamp')
		}

	} else {

		users.index(opts,function(users) {
			res.send(users);
		});
	}

}

var getUsers = function (req, res) {
	var opts=req.query;
	opts['sort']={timestamp:-1};
	opts['limit']=parseInt(req.params["limit"]||req.query.limit ||200)

	if (req.params.user_id != undefined) {

		users.show(req.params.user_id,opts, function (users) {
			res.send(users);
		});

	} else {

		users.index(opts,function(users) {
			res.send(users);
		});
	}

}

var getV4U = function(req,res){
	var Values=mongoose.model('Value');

	var opts=req.query;
	opts['sort']={timestamp:-1};
	opts['limit']=parseInt(req.params["limit"]||req.query.limit ||200)

	var user_id = req.body.user_id||req.query.user_id||req.params.user_id;
	
	if(!user_id)res.status(400).send('No user id present');

	Values.find( {"user_id":user_id}, {}, opts, function(err,dat){
		if(err)res.status(400).send(err);
		res.send(dat);
	});
}

var postUser = function (req, res) {

	// var user_id = req.body.user_id||req.query.user_id;
	// var value = req.body.value||req.query.user_id;
	console.log('B',req.body);
	User.create(req.body, function () {
		res.send("Added User to the System");
	});

}