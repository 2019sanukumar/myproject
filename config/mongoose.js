const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/myproject');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting"));
db.once('open',function(){
    console.log('connected to database');
});
module.exports=db;