const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {Usert} = require('./../server/models/user');

// var id = '5949657f9cf9f28025ac5b8511';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos || todos.length == 0) {
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));

if (ObjectID.isValid(id)) {
    User.findById().then((user) => {
        if (!user) {
            return console.log('Id not found');
        }
        console.log('User', user);
    });
} else {
    console.log('Id not valid');
}
