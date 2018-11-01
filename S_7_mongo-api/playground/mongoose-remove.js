const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose.js');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5bc86b6facaa10a9fcf88eb4';
// Todo.deleteMany({}).then((result)=>{
//     console.log(result);
// });


Todo.deleteOne({
    _id: id
}).then((todo)=>{
    console.log(todo);
});