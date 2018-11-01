const mongoose = require('mongoose');
const validator = require('validator'); //https://www.npmjs.com/package/validator
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true,  // przycia 
        unique: true, // nie będzie 2 documentów na tym samym mailu
        validate: { //https://mongoosejs.com/docs/validation.html
            validator:validator.isEmail, //to samo co -> (value)=>{
               // return validator.isEmail(value);
            //},
            message: ` is not a valid email` //${VALUE}
        }
    },
    password: {
        type: String,
        required: true,
        minlenght:6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }

    }]

});
// to ponieżej zwraca nam tylko to co zdefiniujemy poniżej
// bez tej metody też działa alezwraca nam cały obiket
UserSchema.methods.toJSON = function() {
    var user = this;
    var UserObject = user.toObject();

    return _.pick(UserObject,['_id','email']);
};

  // w mongoose middleware .pre jest wykonywane przed czymś , w tym przypaku przed 'save' , czyli 
// najpierw hashujemy hasło a potem zapisjemy 
UserSchema.pre('save',function (next) {
    var user = this;
    if(user.isModified('password')){
        var password = user.password;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,(err,hash)=>{
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
}); 

//UserSchema.methods = jest obiktemi dodajemetody do UserSchama i ma dostęp dowszystkich właściwości
// to są instance methods 
UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access},process.env.JWT_SECRET).toString();

    user.tokens = user.tokens.concat({access,token});

    return user.save().then(()=>{
        return token;
    });
};

UserSchema.methods.removeToken = function(token){
    var user = this;

    return user.update({
            $pull: {
            tokens: {
                token: token
            }
            }
    });
};

// to jest model methods 
UserSchema.statics.findByToken = function (token) {
    var User = this;

    var decoded;

    // musi być ty catch bo jeśli jwt.veryfi nie znajdzie usera to rzuca error
    try{
        decoded = jwt.verify(token,process.env.JWT_SECRET);
    }catch (e){
        // return new Promise((resolve,reject)=>{
        //     reject();
        // });
        return Promise.reject(); // działa tak samo jak 2 linijki wyżej
    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token, // nested document sa in quotes
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function(email,password){
    var User = this;

    return User.findOne({email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }

        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.password,(err,res)=>{
                if(res){
                    resolve(user);
                }
                reject();
            });
        });
    });
};



var User = mongoose.model('User',UserSchema);

module.exports = {User};