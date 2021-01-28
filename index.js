const express=require('express');// calling express
const app=express();
const port=9000; //seting up the port
const expresslayouts=require('express-ejs-layouts');//for layouts
const db=require('./config/mongoose');
app.use(express.static('./assets'));
app.use(expresslayouts);

app.set('layout extractStyles',true);
app.set('layout extractScript',true);



app.use('/',require('./routes'));//using eexpress router
app.set('view engine','ejs');// adding view engine
app.set('views','./views');//for views folder

app.listen(port,function(err){
    if(err)
    {
        console.log(`error :${port}`);//interpolation
    }
    console.log(`server is running :${port}`);


});