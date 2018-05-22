exports.index = function (req, res, next) {
	res.render('register/index',
		{
			title:'注册',
			loadmap:req.loadmap.register
		}
	);
}
