const express = require('express');


const app = express();

app.get('/', (req,res) => {
    res.status(200).send({
        error: 'Page not found',
        name: 'MyApp'
    });
});

app.get('/users',(req,res)=>{
    res.send([{
        name: 'Tom',
        age: 25
    },{
        name: 'Greg',
        age: 44
    },{
        name: 'Jane',
        age: 34
    }]).status(200);
});

app.listen(3000);

module.exports.app = app;