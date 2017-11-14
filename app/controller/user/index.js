var Models = require('../../models/index');
exports.index = function (req, res, next) {
	res.render('user/index',
		{
			title:'用户中心',
			loadmap:req.loadmap.userIndex,
			name: 'dynamic'
		}
	);
}
exports.following = function (req, res, next) {
	res.render('user/index',
		{
			title:'我的关注',
			loadmap:req.loadmap.userIndex,
			name:'following'
		}
	);
}
exports.fans = function (req, res, next) {
	res.render('user/index',
		{
			title:'我的粉丝',
			loadmap:req.loadmap.userIndex,
			name:'fans'
		}
	);
}
exports.history = function (req, res, next) {
	res.render('user/index',
		{
			title:'浏览历史',
			loadmap:req.loadmap.userIndex,
			name:'history',
			flag: true
		}
	);
}
exports.edit = function (req, res, next) {
	res.render('user/edit',
		{
			title:'用户编辑',
			loadmap:req.loadmap.userEdit
		}
	);
}