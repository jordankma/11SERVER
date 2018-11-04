var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/tin-tuc', function(req, res, next) {
  res.render('tin', { title: 'Tin tức' });
});
router.get('/san-pham', function(req, res, next) {
  res.render('san-pham', { title: 'Đây alf trang sản phẩm' });
});
router.get('/fedu', function(req, res, next) {
  var dulieu = {danhsachsv : ['tuan','hang']};
  res.render('fedu', { danhsach:dulieu });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'post' });
});
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
