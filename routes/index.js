var express = require('express');
var router = express.Router();
var userController = require('../controller/StudentController')
/* GET home page. */
router.post('/insert',userController.insert);
router.get('/',userController.show);
router.get('/delete/:id',userController.delete);
router.get('/pass',userController.pass);
router.get('/fail',userController.fail);
router.get('/top5',userController.top5);
router.get('/top10',userController.top10);
router.post('/update/:id',userController.update);

module.exports = router;
