var User = require('../../api/user');
exports.index= function(req, res, next) {
	User.Login({
		"phone":"15555161265",
    	"Password":"1234516"
	}).then((d)=>{
		console.log(d.data);
	});
	
	res.render('login/index',
		{
			title:'登录',
			loadmap:req.loadmap.login
		}
	);
}
