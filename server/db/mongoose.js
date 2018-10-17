var mongoose = require('mongoose');
var db = {
     localhost: 'mongodb://localhost:27017/TodoApp',
     mlab: 'mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb'
   };

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true }).then(()=>{

    },(e)=>{
        console.log(e);
    })
    
module.exports = {
    //mongoose: mongoose
    mongoose
}