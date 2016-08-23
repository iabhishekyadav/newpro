var express = require('express');
var bodyparser = require('body-parser');
var path = require("path");
var sql = require("mysql");
var obfile = require('./routes/obcaheroute');
//var passport = reqire('passport');
var app = express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname + "/views"));


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//app.use(require('./routes/router'))



app.get('/ob' , obfile.fetch );
app.get('/ob/log' , obfile.log);
app.listen(8080 , function(){
	console.log("Server started at port 8080");
});