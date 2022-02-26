const passport=require('passport');
//const { user } = require('../Controllers/user_controller');
const User=require('../Model/user');
const localStrategy=require('passport-local').Strategy;
//authentication using passport
passport.use(new localStrategy({
    usernameField:'email'
},
function(email,password,done){
    //find  user and establish identity
    User.findOne({email:email},function(err,user){
        if(err){
            console.log('error in finding user --> Passport');
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid user name/Password');
            return done(null,false);
        }
        return done(null,user);
    });

}
));
//serializing the user to whih key is to be  kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})
//deserializing the user from key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user -> Passport');
            return done(err);
        }
        return done(null,user);
    })
});

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated){
        return next();
    }
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;