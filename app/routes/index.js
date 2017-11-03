const express = require('express');
const router = express.Router();
const article = require('../controller/article/index');
const search = require('../controller/search/index');
const filter = require('../filter/index');
/* GET home page. */
router.get('/',filter.loadmap,article.lists);
router.get('/search/',filter.loadmap,search.index);
router.get('/search/detail/:id',filter.loadmap,search.detail);

// router.all('*', function(req, res, next) {
// 	res.status(404).render('error', {
// 		title: '对不起！您访问的页面丢失了！'
// 	});
// });
module.exports = router;
