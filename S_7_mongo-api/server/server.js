var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    console.log(req.body);
    var todo = new Todo({
       text: req.body.text,
       completed: req.body.completed,
       completedAt: req.body.completedAt 
    })
    todo.save().then((doc)=> {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send({
            status: 200,
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000 ,() => {
    console.log('Serve runon 3000 port');
});

module.export = {app};
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

// var Todo = mongoose.model('Todo',{
//     text: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     },
//     completedAt: {
//         type: Number
//     }
// });

// var newTodo = new Todo({
//     text: 'programmer'
// });

// newTodo.save().then((doc) => {
//     console.log('Save cpompleted',doc);
// }, (e) => {
//     console.log('Unable to save',e);
// });





// var newUser = new User({
//     email: 'tomballard@email.com      ' // może być text: true , wtedy text= 'true'
// });

// newUser.save().then((doc) => {
//     console.log('Save cpompleted',doc);
// }, (e) => {
//     console.log('Unable to save',e);
// });

//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
