var Models = require('../../models/index');
exports.index = function (req, res, next) {
	console.log(req.loadmap);
	res.render('search/index',
		{
			title:'搜索页面',
			loadmap:req.loadmap.search
		}
	);
}
exports.detail = function (req, res, next) {
	res.render('search/detail',
		{
			title:'搜索页面详情',
			loadmap:req.loadmap.searchDetail
		}
	);
}