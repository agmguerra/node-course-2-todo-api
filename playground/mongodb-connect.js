//const MongoClient = require('mongodb').MongoClient;

//Usando distrustucring para criar a variável MongoClient
//var {objProp} = obj. Cria a variável objProp a partir
// da propriedade objProp do objeto obj
const {MongoClient, ObjectID} = require('mongodb');

//Cria um objeto do tipo object id gerado
//pelo MongoDB
//var obj = new ObjectID();
//console.log(obj);

// var user = {name: 'Alexandre', age: 49};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    };
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Alexandre Guerra',
    //     age: 49,
    //     location: 'Rio de Janeiro'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert a user');
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });
    db.close();
});
