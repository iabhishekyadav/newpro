var obapi = require('../api/obcacheapi');
var cons = require('../config/data.json');
var ob = {
	fetch : function(req, res){
		if(!req){
			console.log("no request found");
			return;
		}
		var query = req.query || {} ;
		console.log('query is : ' + JSON.stringify(query));
		obapi.fetch(query , callback);

		function callback(err , data){
			if(err){
				console.log("error returned");
			}
			if(!data.length){
				console.log("no data recors fetched");
			}
			else{
				console.log("data fetched : \n" );
				res.send(data);
			}
		}
	},

	log : function(req , res){
		obapi.log(req, res);
	},

	get : function(req , res){
		obapi.get(req,res);
	},

	sett : function(req,res){
		console.log('the value of constant = ' , cons);
	},

	settt : function(req,res){
		cons.age = 123;
		console.log('the value of constant = ' , cons.age);
	}

};

module.exports = ob;

if(require.main === module){
	(function(){
		ob.fetch({},{});
		ob.log({});
	})();
}