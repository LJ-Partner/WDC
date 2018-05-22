exports.index = function (req, res, next) {
	res.render('login/index',
		{
			title:'登录',
			loadmap:req.loadmap.login
		}
	);
}
