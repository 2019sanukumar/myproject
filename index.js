const express=require('express');// calling express
const cookieParser=require('cookie-parser');//cookie parser
const app=express();
const port=9000; //seting up the port
const expresslayouts=require('express-ejs-layouts');//for layouts
const db=require('./config/mongoose');
//for passport strategy
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo')(session);






app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expresslayouts);


app.set('layout extractStyles',true);//extract style from sub pages into thr layouts
app.set('layout extractScripts',true);




app.set('view engine','ejs');// adding view engine
app.set('views','./views');//for views folder
//mongo store is  usered to storethe session of the cookie
app.use(session({
    name:'myproject',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)

    },
    store: new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },
        function(err)
        {
            console.log(err||'connect-mogodb steup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));//using eexpress router

app.listen(port,function(err){
    if(err)
    {
        console.log(`error :${port}`);//interpolation
    }
    console.log(`server is running :${port}`);


});