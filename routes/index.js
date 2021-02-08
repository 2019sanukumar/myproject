const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/setting',require('./setting'));
router.use('/post',require('./post'));
router.use('/comments',require('./comments'));

module.exports=router;