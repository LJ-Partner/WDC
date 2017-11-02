var express = require('express');
var router = express.Router();
var Index = require('../controller/index');
var articleList = require('../controller/article/list');
var articleDetail = require('../controller/article/detail');

var searchIndex = require('../controller/search/index');
var searchDetail = require('../controller/search/detail');
/* GET home page. */
router.get('/',Index.lists);
router.get('/a/:type/:name', articleList.lists);
router.get('/a/:type/:name/detail/:id', articleDetail.lists);

router.get('/search/', searchIndex.lists);
router.get('/search/detail', searchDetail.detail);
// router.all('*', function(req, res, next) {
// 	res.status(404).render('error', {
// 		title: '对不起！您访问的页面丢失了！'
// 	});
// });
module.exports = router;
