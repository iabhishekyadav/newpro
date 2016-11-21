'use strict';

var dbfeedback = require('../config/dbfeedback');
var mysql = require('mysql');
var db = require('../config/db')(dbfeedback);
//var db = mysql.createConnection(dbfeedback);
var util = require('util');

var table_schema = {
	name : 'nps_issues',
	columns : ['id' , 'category_id' , 'scope' , 'status' , 'subissue_status'] 
}

var ob = {
	table: db.define(table_schema),

	fetch: function(data , callback){
		var table = this.table;

		var columns = [table.star()];
		var query = table.select(columns).from(table).limit(5);

		console.log("OHH!! u called the model");
		query.exec(callback);
	},

	get : function(data , callback){
		var id = data.id ; 
	}
}
module.exports = ob;
