//const MongoClient = require('mongodb').MongoClient; to coniżej tak samo działa
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); // wydrukuje objeckID
// _id jest to ObcjectID
// var user = {name: 'Martin', age: 35};
// var {name} = user; // do zmiennej name będzie przypisana proparty name z obiektu user
// console.log(name);

// można sie  połączyć z bazą TodoApp zanim zostanie on utworzona
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Mongo connect'); // resturn jest po to by dalsza część funcji nie wykonywała
    }
    console.log('Connected to MongoDb');
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result)=> {
    //     if(err){
    //         console.log('Unable instr todo',err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Tom',
    //     age: 23,
    //     location: 'Cracow'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable instr users', err)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});