var Models = require('../../models/index');
exports.index = function (req, res, next) {
	
	res.render('write/index.html',
		{
			title:'编写文章',
			loadmap:req.loadmap.writeIndex
		}
	);
}

exports.howtowrite = function (req, res, next) {
	console.log(req.loadmap);
	res.render('write/howtowrite.html',
		{
			title:'关于专栏文章',
			loadmap:req.loadmap.writeHow
		}
	);
}