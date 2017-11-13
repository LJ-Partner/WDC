var Models = require('../../models/index');
exports.index = function (req, res, next) {
	res.render('user/index',
		{
			title:'用户中心',
			loadmap:req.loadmap.userIndex
		}
	);
}

exports.edit = function (req, res, next) {
	res.render('user/edit',
		{
			title:'用户编辑',
			loadmap:req.loadmap.userEdit
		}
	);
}