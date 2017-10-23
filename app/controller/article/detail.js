var articleDetail = require('../models/index');
exports.lists = function (req, res, next) {
	res.render('index.html',
		{
			title:'web社区项目'
		}
	);
}