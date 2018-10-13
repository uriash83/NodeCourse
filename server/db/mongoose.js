var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// dla local : mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
//mongoose.connect('mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb',{ useNewUrlParser: true });


let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://<uriash>:<1qazZXCVB>@ds249092.mlab.com:49092/climb'
};
 
mongoose.connect(db.mlab,
    {
        useNewUrlParser: true
    }
).then(
    () => {},
    err => 
    {
        mongoose.connect(db.localhost,
            {
                useNewUrlParser: true
            }
        );
    }
);
//var dbb = mongoose.connection;

//dbb.on('error', console.error.bind(console, 'MongoDB connection errorrrrr:'));
module.exports = {
    //mongoose: mongoose
    mongoose
};