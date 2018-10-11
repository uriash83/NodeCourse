const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bbf530dbd4ccb1d740ec097";
var idu = "5bbb652e1dacce1c80e98400";
// if(!ObjectID.isValid(id)){
//     console.log('Id not valid')
// }
// Todo.find({
//     _id: id // w mongoose jako idnie musi być ObjectID jak to było w samym mongoodb
// }).then((todos) => {
//     console.log('Todso',todos)
// });

// Todo.findOne({
//     _id: id 
// }).then((todo) => {
//     console.log('Todo',todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id',todo)
// }).catch((e) => console.log(e));

//https://mongoosejs.com/docs/queries.html

User.findById(idu).then((users) => {
    if(!users){
        return console.log('Not found users');
    }
    console.log('users: ',users)
}).catch((e) => console.log(e));