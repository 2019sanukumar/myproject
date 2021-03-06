const express = require('express');
const router=express.Router();
const passport=require('passport');


const usersController=require('../controller/users_controller');
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/sign-up',usersController.signup);
router.get('/sign-in',usersController.signin);
router.post('/create',usersController.create);


// use passport as a middleware to authneitcate
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
) ,usersController.createSession );

router.get('/sign-out',usersController.destroySession);


module.exports=router;