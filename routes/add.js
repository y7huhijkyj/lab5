var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("sdlkfjdslfksjf");
	res.render('add');

	var myObject = new Object();

	myObject.name = req.query.name;
	myObject.description = req.query.description;
	myObject.imageURL = "http://lorempixel.com/500/500/people";
	console.log(JSON.stringify(myObject));

	data["friends"].push(myObject);
 }