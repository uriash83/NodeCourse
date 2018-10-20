var mongoose = require('mongoose');

// mongoose.connect('mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb?authSource=dbWithUserCredentials',{ useNewUrlParser: true }).then(
//   ()=>{
//     console.log("connected to mongoDB")},
//  (err)=>{
//      console.log("err",err)
//  });


mongoose.Promise = global.Promise;
// dla local : mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
mongoose.connect('mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb',
    { useNewUrlParser: true }).then(()=>{

    },(e)=>{
        console.log(e);
    })



module.exports = {
    //mongoose: mongoose
    mongoose
}