exports.index = function (req, res, next) {
	res.render('findpwd/index',
		{
			title:'找回密码',
			loadmap:req.loadmap.findpwd
		}
	);
}
