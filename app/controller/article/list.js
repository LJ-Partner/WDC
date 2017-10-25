var list = require('../../models/article/left-side.js');
exports.lists = function (req, res, next) {
	console.log(req.params.type);
	console.log(req.params.name);
	res.render('index',
		{
			title:'文章列表',
			leftSide: list,
			type: req.params.type,
			name: req.params.name 
		}
	);
}