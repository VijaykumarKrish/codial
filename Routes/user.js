const express=require('express');
const router=express.Router();

const userController=require('../Controllers/user_controller');

router.get('/profile',userController.user);
router.get('/sign-in',userController.sign_in);
router.post('/create',userController.create);
router.get('/log-in',userController.log_in);
router.post('/create-session',userController.create_session);
module.exports=router;