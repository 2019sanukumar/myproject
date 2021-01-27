const express=require('express');// calling express
const app=express();
const port=9000; //seting up the port

app.use('/',require('./routes'));//using eexpress router

app.listen(port,function(err){
    if(err)
    {
        console.log(`error :${port}`);//interpolation
    }
    console.log(`server is running :${port}`);


});