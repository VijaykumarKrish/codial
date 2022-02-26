const Post=require('../Model/posts');
const User=require('../Model/user');
module.exports.home= async function(req,res){
       try{
         let posts=await Post.find({})
         .populate('user')
         .populate({
             path:'comments',
             populate:{
                 path:'user'
             }
         });
         let users=await User.find({});
         return res.render('home',{
            title:"Codeial | Home",
           posts:posts,
            all_users:users
         });
       }catch(err){
          console.log('Error',err);
          return;
       }

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:'home controller is ready',
    //         posts:posts
    //     });
    // })
    // res.cookie('user_id',25);
    // Post.find({})
    // .populate('user')
    // .populate({
    //     path:'comments',
    //     populate:{
    //         path:'user'
    //     }
    // })
    // .exec(function(err,posts){
    //    User.find({},function(err,users){
    //         return res.render('home',{
    //             title:'home controller is ready',
    //             posts:posts,
    //             all_users:users
    //         });
        
    //     })
    // })
}
    
