var cookieParser = require('cookie-parser');
var User = require('../../api/user');
/**
 * login (GET) 用户登录页面
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index= function(req, res, next) {
	
	if(req.query.err){
		res.render('login/index',
			{
				title:'登录',
				loadmap:req.loadmap.login,
				errmsg:"密码错误或用户不存在",
				user:req.user
			}
		);
	} else {
		console.log(typeof req.user)
		res.render('login/index',
			{
				title:'登录',
				loadmap:req.loadmap.login,
				user:req.user
			}
		);
	}
	
}
/**
 * login (POST) 用户登录提交信息 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login =async (req, res, next) => {
	let user_ = {};
    user_.phone = req.body.phone;
	user_.Password = req.body.password;
	let login = await User.Login(user_);

	if(login.status==200 && login.data.code==200) {
		res.cookie('access',login.data.data,{ expires: new Date(Date.now() + (1000*60*60)), httpOnly: true});
		let userinfo = await User.UserInfo(login.data.data);		
		res.cookie('user',JSON.stringify(userinfo.data.data),{ expires: new Date(Date.now() + (1000*60*60)), httpOnly: true});
		return res.redirect('/user');
	}
	return res.redirect("/login?err=userorpwd");
}
/**
 * logout (GET) 用户登出
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.logout =async (req, res, next) => {
	res.clearCookie("access");
	res.clearCookie("user");
	return res.redirect('/user');	
}