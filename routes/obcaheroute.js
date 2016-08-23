var obapi = require('../api/obcacheapi');
var ob = {
	fetch : function(req, res){
		if(!req){
			console.log("no request found");
			return;
		}
		var query = req.query || {} ;
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
	}

}
module.exports = ob;

if(require.main === module){
	(function(){
		ob.fetch({},{});
		ob.log({});
	})();
}