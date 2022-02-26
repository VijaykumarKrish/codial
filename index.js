const express=require('express');
//const router = require('./Routes');
const port=8000;
const cookieParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
const db=require('./Config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./Config/passport-local-strategy');
// const p(express.static('./a'))
const app=express();
app.use(express.static('assets'));
const MongoStore=require('connect-mongo');
//const sassMiddleware=require('node-sass-middleware');

// app.use(sassMidleware({
//     src:'/assets/scss',
//     destination:'/assets/css',
//     debug:true,
//     outputStyle:'extended',
//     prefix:'/css'
// }))

app.use(cookieParser());
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');
//app.use('/profile',require('./Routes/user'));

app.use(session({
    name:'CODIAL',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(100 * 60 * 100)
    },
    store: MongoStore.create({
            mongoUrl:'mongodb+srv://krishna:Krishna123@contacts.e2hne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            //mongooseConnection:db,
            autoRemove: 'disabled'
        
    },
    function(err){
        console.log(err || 'connect mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./Routes'));

app.listen(port,function(err){
    if(err){
        console.log('error in connecting to the server');
    }
    console.log(`server is successfully running on ${port}`);
})