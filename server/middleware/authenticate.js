var {User} = require('./../models/user');

var authenticate = ( req,res,next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user)=>{
        console.log('user',user)
        if(!user){
            return Promise.reject(); // i wszystko co poniżej nie bęzie wykonane aż do bloku chatch gdzie error będzie wychwycony
        }
        req.user = user;
        req.token = token;
        next(); // po next przechdzi dalej czyli w app.get (res,req)
    }).catch((e)=>{
        res.status(401).send();
    });
};

module.exports = {authenticate};