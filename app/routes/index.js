const express = require('express');
const router = express.Router();
const Index = require('../controller/index');
const articleList = require('../controller/article/list');
const articleDetail = require('../controller/article/detail');

const searchIndex = require('../controller/search/index');
const searchDetail = require('../controller/search/detail');
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
