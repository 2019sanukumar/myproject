
module.exports.profile=function(req,res)
{
    return res.end('<h1> user profile</h1>');
    
};

module.exports.signup=function(req,res)
{
    return res.render('user_signup',{
        title:"sign up"

    })
}

//rendrer the sign in page
module.exports.signin=function(req,res)
{
    return res.render('user_signin',{
        title:"sign in"

    })
}
//get the sign-up data
module.exports.create=function(req,res)
{

}

module.exports.createSession=function(req,res)
{
    
}