
require('./config/config.js')
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')
var {authenticate} = require('./middleware/authenticate');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000; // process.env dla HEROKU
app.use(bodyParser.json());

app.get('/todos', authenticate,(req,res) => {
    Todo.find({
        _creator: req.user._id
    }).then((todos) => {
        res.send({
            status: 200,
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    })
});

app.post('/todos', authenticate, (req,res) => {
    console.log(req.body);
    var todo = new Todo({
       text: req.body.text,
       completed: req.body.completed,
       completedAt: req.body.completedAt,
       _creator: req.user._id 
    })
    todo.save().then((doc)=> {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.delete('/todos/:id',(req,res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send('Invalid ID');
    }
    Todo.deleteOne({
        _id: id
    }).then((todo)=>{
        if(!todo){              //w mongoose obiekt nie jest pusty naewt jeśli zwróci zero 
            console.log("Doc is empty");
            res.status(404).send('Empty doc');
            
        }        
            res.send(todo);
            console.log('removed todo') 
        
    }).catch((e)=>{
        res.status(400).send('Error ')
    });
});

app.patch('/todos/:id',(req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body ,['text','completed']);

    if(!ObjectID.isValid(id)){
        res.status(404).send('Invalid ID');
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime()
    }
    else{
        body.completed = false;
        body.completed = null;
    }
    Todo.updateOne({_id: id},{$set: body},{new: false}).then((todo)=>{
        console.log(todo);
        res.status(200).send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });
});



app.get('/', (req,res)=>{
    res.send({
        status: 200,
        text: 'MM'
    });
},(e)=>{
    res.status(400).send(e);
});

app.get('/todos/:id',(req,res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(400).send('Invalid ID');
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            console.log('404')
            res.status(404).send('ID not found');
        }
        console.log('200');
        res.status(200).send(`Todo${todo}`);
    }).catch((e) => res.status(400).send('Error:',e))
    
});
/////////////////////////////////////////////////////////////////////////////////////////
//                      USER                                                           //
/////////////////////////////////////////////////////////////////////////////////////////

app.post('/users',(req,res)=>{
    var body = _.pick(req.body ,['email','password']);
    var user = new User(body);
    user.save().then(()=>{
        return user.generateAuthToken(); //jest return because of chain promises
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.get('/users/me', authenticate ,(req,res)=>{
    res.send(req.user);// bo req został nadpiane w authenticate
});

app.post('/users/login',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    User.findByCredentials(body.email,body.password).then((user)=>{
        return user.generateAuthToken().then((token)=>{
            res.header('x-auth',token).send(user);
        });
        res.status(200).send({text: 'Login uscces',user: user})
    }).catch((e)=>{
        res.status(400).send(e);
    });
    
});

app.delete('/users/me/token',authenticate, (req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    },()=>{
        res.status(400).send();
    });
});

app.listen(port ,() => {
    console.log(`Start at port ${port}`);
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
