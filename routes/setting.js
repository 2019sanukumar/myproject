const express = require('express');
const router=express.Router();
const settingController=require('../controller/setting_controller');
router.get('/',settingController);
module.exports=router;