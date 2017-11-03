var map = require('../public/dist/fry.map.json');
exports.loadmap = function (req, res, next){

	
	req.loadmap=map;
	next();
}
exports.access=function (req, res, next) {

	next();
}