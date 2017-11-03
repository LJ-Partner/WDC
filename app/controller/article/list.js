const Module = require('../../models/index.js');

exports.lists = function (req, res, next) {
	//console.log(req.params.type);
	//console.log(req.params.name);
	res.render('index',
		{
			title:'文章列表',
			leftSide: Module.leftSide,
			type: req.params.type,
			name: req.params.name 
		}
	);
}