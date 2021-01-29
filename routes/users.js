const express = require('express');
const router=express.Router();


const usersController=require('../controller/users_constroller');
router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signup);
router.get('/sign-in',usersController.signin);
module.exports=router;