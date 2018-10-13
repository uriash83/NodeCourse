var mongoose = require('mongoose');

// mongoose.connect('mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb?authSource=dbWithUserCredentials',{ useNewUrlParser: true }).then(
//   ()=>{
//     console.log("connected to mongoDB")},
//  (err)=>{
//      console.log("err",err)
//  });

mongoose.connect('mongodb+srv://node-rest:'+ process.env.MONGO_ATLAS_PW+'@cluster0-cstkp.mongodb.net/test',{

	auth: {
      user: "node-rest",
      password: "node-rest"
    }
	
}); 