exports.lists = function (req, res, next) {
	res.render('search/index',
		{
			title:'搜索页面'
		}
	);
}