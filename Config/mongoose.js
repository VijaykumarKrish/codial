const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://krishna:Krishna123@contacts.e2hne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error conecting to mongodb"));
db.once('open',function(){
    console.log('connected to mongodb');
});
module.exports=db;