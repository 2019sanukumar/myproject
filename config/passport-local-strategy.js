const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
//authenticationusing passport
passport.use(new LocalStrategy(
    {
        usernameField:'email'
    },
    function(email,password,done)
    {
        // find the user and estalbish the idenity
        User.findOne({email:email},function(err,user)
        {
            if(err)
            {
                console.log('error in finding user');
                return done(err);
            }
            if(!user || user.password !=password)
            {
                console.log('INvalid username/password');
                return done(null,false);

            }
            return done(null,user);

        });

    }

));
// serliasind the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done)
{
    done(null,user.id);

});

//deserilsing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user)
    {
        if(err)
        {
            console.log('Error in finding error');
            return done(err);

        }
        return done(null,user);
    })

});
// chehck if the user is authentivated
passport.checkAuthentication=function(req,res,next)
{
    //if the user is signed in then pass on request to the next function
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');

}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated())
    {
        //req.user contains the current  sign in user
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;
