var map = require('../public/dist/fry.map.json');
exports.loadmap = function (req, res, next){
	req.loadmap=map;
	if(req.cookies && req.cookies["user"]) {
		req.user = JSON.parse(req.cookies["user"]);
	} 
	
	next();
}
exports.access=function (req, res, next) {
	if( req.cookies['access']){

		next();
	} else {
		res.redirect('/login');
	}
	
}