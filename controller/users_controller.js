
const User=require('../models/user');
module.exports.profile=function(req,res)
{
    return res.render('profile',{
        title:'users profile'
    })
    
};
//render the sign up page
module.exports.signup=function(req,res)
{
    if(req.isAuthenticated()){
        res.redirect('/users/profile')
    }
    return res.render('user_signup',{
        title:"sign up"

    });
}

//rendrer the sign in page
module.exports.signin=function(req,res)
{
    if(req.isAuthenticated()){
        res.redirect('/users/profile')
    }
    return res.render('user_signin',{
        title:"sign in"

    })
}
//get the sign-up data
module.exports.create=function(req,res)
{
    console.log('inside create function');
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('/users/sign-up');
    }
    console.log(req.body);
    console.log('req.body.email',req.body.email);
    console.log('req.body.password',req.body.password);
    
    User.findOne({email:req.body.email},function(err,user)
    {
        if(err){console.log('error in finding user in signingup')};
        if(!user)
        {
            User.create(req.body,function(err,user)
            {
                if(err)
                {
                    console.log('error in creating');
                    return 
                }
                return res.redirect('/users/sign-in');


            })
        }
        else{
            return res.redirect('/users');

        }

    });
}

module.exports.createSession=function(req,res)
{
    return res.redirect('/');
    
}
module.exports.destroySession=function(req,res)
{
    req.logout();
    return res.redirect('/');
}