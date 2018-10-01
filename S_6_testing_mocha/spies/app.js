var db = require('./db');

module.exports.handleSignUp = (email,password) => {

    //db.saveUser({
    //    email: email,
    //    password: password
    //});
    // W ES6 jeśli właściwość ma taka samą nazwę jak zmienna można zrobic tak:
    db.saveUser({email,password
    });
};