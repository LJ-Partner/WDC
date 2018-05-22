const API = 'http://120.132.22.128:8180';
const generateCaptcha = API + '/user/generateCaptcha';						//获取验证码图案 
const checkNickName = API + '/user/checkNickname';							//用户名验证 
const checkCaptcha = API + '/user/captchaVerify';							//验证码验证
const register = API + '/user/register';									//注册
module.exports = {
	generateCaptcha,
	checkNickName,
	checkCaptcha,
	register	
}