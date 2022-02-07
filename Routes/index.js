const express=require('express');
const router=express.Router();
const homeController=require('../Controllers/home_controller');

router.get('/',homeController.home);
router.use('/users',require('./user'));
//router.use('/create',require('./user'));
module.exports=router;