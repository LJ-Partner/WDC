exports.detail = function (req, res, next) {
	res.render('search/detail',
		{
			title:'搜索文章详情'
		}
	);
}