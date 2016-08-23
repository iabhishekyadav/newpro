'use strict';

var async = require('async');
var fs = require('fs');
var path = require('path');

var dir1 = path.join(__dirname + "/views");
var dir2 = path.join(__dirname);

var f1 = path.join(__dirname + "/views/add.ejs");
var f2 = path.join(__dirname + "/views/home.ejs");
function conc(){

	async.concat([dir1 , dir2] , fs.readdir , function (err , result){
		if(err)
			throw(err);
		else
			console.log(result);
	});
}



function eac(){

	var max = 0;
	async.each([f1,f2] , function(data , callback){
		console.log("data value :" , data , " , length of string " , data.length);
			if(data.length < 43)
				callback();
			else
				callback();
	}
	, function(err){
		if(err){
			console.log(err , "found an error");
		}
		console.log("callback received");
		if(err){
			throw(err);
			return;
		}
	});
}

function eachof(){
	configs = {};
	async.forEachOf([f1,f2], function (value, key, callback) {
		console.log("key : " , key);
	    fs.readFile( value , function (err, data) {
	        if (err) return callback(err);
	        try {
	            configs[key] = data;
	        } catch (e) {
	            return callback(e);
	        }
	        callback();
	    });
	}, function (err) {
	    if (err)
	     console.error("found an error : ",  err.message);
	 	else
	 		console.log(' reached here : ');
	 	//console.log(key);
	 	console.log(configs);
	});
}
function  filter(){
	var f1 = {
		a:"aa",
		b:'bb',
		c:"cc"
	}
	async.mapValues(f1, function(data, key ,  callback) {
		console.log(data , data.search('k'));
		if(data.search('k') == -1 ){
			callback("found c in the string" , data);
		}
	}, function(err, results) {
		console.log("err is: " , err , " results are :" , results);
	   console.log(results);
	});
}

filter();
