var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// dla local : mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || 'mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb',{ useNewUrlParser: true });



module.exports = {
    //mongoose: mongoose
    mongoose
};