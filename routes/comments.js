const express = require('express');
const router=express.Router();
const passport=require('passport');

const commentsController=require('../controller/comments_controller');
const { route } = require('./post');


router.post('/create',passport.checkAuthentication,commentsController.create);



module.exports=router;