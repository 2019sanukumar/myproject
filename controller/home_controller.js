const Post=require('../models/post');
const post= require('../routes');


module.exports.home=function(req,res){
    // return res.end('<p> it is worjing </p>');
    // 
    Post.find({},function(err,posts)
    {
        return res.render('home',{
            title:"Home",
            posts:posts
        });
    });
}

// module.exports.actionname=function(req,res)
// {

// };