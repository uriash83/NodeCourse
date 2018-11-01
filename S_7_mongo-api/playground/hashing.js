const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const bcrypt = require('bcryptjs');

var password = 'admin';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//         fs.writeFile('new.txt',hash,(err)=>{
//             console.log(err);
//         });
//     });
// });

var hashedPass = '$2a$10$muvwa4lMHDzADSy1cDDrsuTFKMdtrB1sm5q8J2d/hoAhaj4OKSYpm';
// poniże zwraca true gdyhasło się zgadza , ciekawe że compare bez znajomości salt zwraca hasło 
bcrypt.compare('admin',hashedPass,(err,res)=>{
    console.log(res);
});

//******SHA256**************************************************** */
// var data = {
//     id: 10
// };

// var token = jwt.sign(data,'secret');
// console.log('coded:',token);

// var decoded = jwt.verify(token,'secret');
// console.log('decoded:',decoded);

//////////////crypto/////////////////////////
// var message = 'I am numer 2';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id:5
// }
// //  'somesecret poniżej to tzw. salt. Jeślu użytkowniek chce zmienić id , a nie zna salt , dostęp będzie zabrowniony
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString() 
// }

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash == token.hash){
//     console.log('Data was not chenged')
// }else{
//     console.log('Data was changed. Dont touch')
// }

/////////////////////////////////////////