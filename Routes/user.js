const express=require('express');
const passport=require('passport');
const router=express.Router();

const userController=require('../Controllers/user_controller');

//router.get('/profile/:id',passport.checkAuthentication,userController.user);
router.get('/profile/:id',userController.user);
router.post('/update/:id',passport.checkAuthentication,userController.update);
router.get('/sign-in',userController.sign_in);
router.post('/create',userController.create);
router.get('/log-in',userController.log_in);
router.get('/sign-out',userController.destroySession);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'users/sign-in'},
),userController.create_session);
module.exports=router;