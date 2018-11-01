
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Mongo connect'); // resturn jest po to by dalsza część funcji nie wykonywała
    }
    const db = client.db('TodoApp');
    
    // deleteMany usuwa wiele docukentów
    // db.collection('Todos').deleteMany({
    //     text: 'eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });


    // deleteOne usuwa pierwszy który spełnia kryteria
    // db.collection('Todos').deleteOne({text: 'learn more'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOnlyOne - wresult jest dokumt który właśnie usunęliśmy i można go w razieczego spowrotem doddac
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({
    //     name: 'Tom'
    // }).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5bb4e0ab235981f27416b2fc")
    }).then((result) => {
        console.log(result);
    });
    //client.close();
});