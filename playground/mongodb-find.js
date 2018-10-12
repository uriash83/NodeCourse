
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Mongo connect'); // resturn jest po to by dalsza część funcji nie wykonywała
    }
    const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bb390f4afff861ee0238e0f')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     if(err){
    //         console.log('Unable to fetch',err);
    //     }
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count:${count}`);
    // },(err) => {
    //     if(err){
    //         console.log('Unable to fetch',err);
    //     }
    // });

    db.collection('Users').find({
        name: 'Tom'
    }).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        if(err){
            console.log('Unable to fetch',err);
        }
    });

    //client.close();
});