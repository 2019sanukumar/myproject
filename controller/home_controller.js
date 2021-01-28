module.exports.home=function(req,res){
    // return res.end('<p> it is worjing </p>');
    return res.render('home',{
        title:'home',
    });
}

// module.exports.actionname=function(req,res)
// {

// };