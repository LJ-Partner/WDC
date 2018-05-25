var Models = require('../../models/index');
exports.index = function (req, res, next) {
	//console.log(req.loadmap);
	res.render('article/index.html',
		{
			title:'web社区项目',
			data:Models.Article.home(),
			leftSide: Models.leftSide,
			loadmap:req.loadmap.index,
			user:req.user
		}
	);
}