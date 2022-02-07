const express=require('express');
//const router = require('./Routes');
const port=8000;
const cookieParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
const db=require('./Config/mongoose');
const app=express();

app.use(cookieParser());
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./Routes/index'));
app.set('view engine','ejs');
app.set('views','./views');
//app.use('/profile',require('./Routes/user'));






app.listen(port,function(err){
    if(err){
        console.log('error in connecting to the server');
    }
    console.log(`server is successfully running on ${port}`);
})