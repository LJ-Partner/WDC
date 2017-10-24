exports.lists = function (req, res, next) {
	res.render('article/detail',
		{
			title:'文章详情'
		}
	);
}