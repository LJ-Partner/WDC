var express = require('express');
var router = express.Router();
var Index = require('../controller/index');
var articleDetail = require('../controller/detail');

/* GET home page. */

router.get('/',Index.lists);

router.get('/article/detail', articleDetail.lists);


// router.all('*', function(req, res, next) {
// 	res.status(404).render('error', {
// 		title: '对不起！您访问的页面丢失了！'
// 	});
// });
module.exports = router;
