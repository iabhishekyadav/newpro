var myrouter = require('express').Router();
var sql = require("mysql");
var bodyparser = require('body-parser');
var fs = require('fs');


//var urlencode  = bodyparser.urlencoded({ extended: false });
//var jsonpaarser = bodyparser.json();

var conObj = sql.createConnection({

	host: "localhost",
	user: "root",
	password: "root",
	database: "mydb"
});

myrouter.all('/', function(req, res) {
	console.log("Entered home for root request");
	conObj.query("select * from users ", function(err, rows) {

		if (err) throw err;
		console.log("data fetched");

		res.render('home', {
			dataObj: rows
		});
		res.end();
	})
})

myrouter.all('/temp', function(req, res) {

	console.log("reached temp");
	var newRow = {
		"name": req.body.name,
		"age": req.body.age,
		"address": req.body.address
	};
	console.log(req.body);
	console.log(newRow);
	conObj.query("insert into users SET ? ", newRow, function(err, row) {
		if (err) throw err;

		console.log("Inserted " + newRow + " with " + row.insertId);
	})
	res.redirect('/');

})

myrouter.all('/add', function(req, res) {

	console.log("Ready to add user");

	res.render('add');

})

myrouter.all('/update', function(req, res) {

	var data = {
		"name": req.body.name,
		"age": req.body.age,
		"address": req.body.address
	};

	var newdata = {
		"name": req.body.newname,
		"age": req.body.newage,
		"address": req.body.newaddress
	};
	console.log(data + " data is here");
	console.log(newdata);

	var arr = [data.name, data.age, data.address, newdata.name, newdata.age, newdata.address];

	res.send(arr);
	console.log(arr);
	conObj.query("update users set name= ?,age= ?,address= ? where name= ? and age= ? and address= ?", [data.name, data.age, data.address, newdata.name, newdata.age, newdata.address], function(err, row) {

		if (err) throw err;

		console.log("changed rows are ", row.affectedRows);
	})
})


var newfun = function() {

	console.log("called");
	return "Hello";
}

module.exports = myrouter;
module.exports.fn = newfun;