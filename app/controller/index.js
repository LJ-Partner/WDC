var list = require('../models/article/left-side.js');
var Index = require('../models/index');
exports.lists = function (req, res, next) {
	res.render('index.html',
		{
			title:'web社区项目',
			leftSide: list
		}
	);
}