const Post=require("../Model/posts");
const Comment=require('../Model/comment');
module.exports.create= async function(req,res){
    try{
    await Post.create({
        content:req.body.content,
        user:req.user._id
    });
    // function(err,post){
    //    if(err){console.log('error in creating post');return;}
       return res.redirect('back');}
    //})
    catch(err){
        console.log('Error',err);
        return;
    }
}

module.exports.destroy=async function(req,res){
    try{
    let post=await Post.findById(req.params.id);
        // ,function(err,post){
        if(post.user==req.user.id){
            post.remove();
           await Comment.deleteMany({post:req.params.id});
            // ,function(err){
                 return res.redirect('/');
             //})
        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('Error',err);
        return;
    }
//     })
 }