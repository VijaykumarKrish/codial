const User=require('../Model/user');
module.exports.user=function(req,res){
    return res.render('user_profile',{
         title:"your user profile"
     });
}
module.exports.sign_in=function(req,res){
    return res.render('sign-in',{
        title:"sign-in"
    });
}
module.exports.log_in=function(req,res){
    res.render('log-in',{
        title:'log in'
    });
}
module.exports.create_session=function(req,res){
    return res.redirect('/users/profile');
}
module.exports.create=function (req,res){
    if(req.body.password!=req.body.confirm_password){
         return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in sign-up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user');
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('/users/log-in');
        }
    })
    // else{
    //     return res.redirect('/');
    // }
}