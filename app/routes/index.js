const express = require('express');
const router = express.Router();
const article = require('../controller/article/index');
const search = require('../controller/search/index');
const user = require('../controller/user/index');
const write = require('../controller/write/index');
const login = require('../controller/login/index');
const register = require('../controller/register/index');
const findpwd = require('../controller/findpwd/index');
const filter = require('../filter/index');

/* GET home page. */
router.get('/',filter.loadmap,article.index);
router.get('/search/',filter.loadmap,search.index);
router.get('/search/detail/:id',filter.loadmap,search.detail);
/* 用户中心 */
router.get('/user/',filter.loadmap,filter.access,user.index);
router.get('/user/following',filter.loadmap,user.following);
router.get('/user/fans',filter.loadmap,user.fans);
router.get('/user/history',filter.loadmap,user.history);
router.get('/user/edit/:id',filter.loadmap,user.edit);
router.get('/write/',filter.loadmap,write.index);
router.get('/howtowrite/',filter.loadmap,write.howtowrite);

router.get('/login',filter.loadmap,login.index);
router.post('/login',login.login);
router.get('/logout',login.logout);
router.get('/register',filter.loadmap,register.index);
router.get('/findpwd',filter.loadmap,findpwd.index);

// router.all('*', function(req, res, next) {
// 	res.status(404).render('error', {
// 		title: '对不起！您访问的页面丢失了！'
// 	});
// });
module.exports = router;
