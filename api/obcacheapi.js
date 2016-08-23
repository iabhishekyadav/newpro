var obcache = require('obcache');
var datafetch = require('../model/obmodel');

var ob = obcache.debug;
var  cache = ob.register(new obcache.Create({
	max: 10000,
	maxAge: 7200
}), 'cache1');

var original = function (callback){

	datafetch.fetch({} , function(err , data){
		if(err || !data){
			console.log("error of data not fetched");
			return callback(err , data);
		}
		console.log("data fetched succesfully");
		callback('', data);
	});
}
var wrapperfun = cache.wrap(original);


var obdata = {

	fetch : function(data , callback){
		wrapperfun(function(err , data){
			if(err || !data){
				console.log("found error in call or data missing in api");
				return callback(err , data);
			}
			console.log("data fetched at api");
			return callback('' , data);
		})
	},

	log : function(req , res){
		ob.view(req , res , console.log);
	}
}
module.exports = obdata;

if(require.main === module){
	(function(){
		obdata.fetch({},console.log);
		ob.log({});
	})();
}