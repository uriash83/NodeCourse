
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Mongo connect'); // resturn jest po to by dalsza część funcji nie wykonywała
    }
    const db = client.db('TodoApp');
    
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bb4dddb235981f27416b223")
    // } , {
    //     $set: {
    //         completed: true
    //     }
    // } , {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5bb4e09e235981f27416b2f6")
    }, {
        $set: {
            name: "Tommy"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    } ).then((result => {
        console.log(result);
    }));
    //client.close();
});