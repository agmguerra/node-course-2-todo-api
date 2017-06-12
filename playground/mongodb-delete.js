const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    };
    console.log('Connected to MongoDB Server');

    //Delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //Delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //find one and delete
    db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((result) => {
        console.log(result);
    })

    //db.close();
});
