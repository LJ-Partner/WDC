var Models = require('../../models/index');
exports.index = function (req, res, next) {
	console.log(req.loadmap);
	res.render('user/index',
		{
			title:'用户中心',
			loadmap:req.loadmap.userIndex
		}
	);
}