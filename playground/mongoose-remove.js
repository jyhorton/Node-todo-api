const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c45b8735a13924673228a76';

/* Todo.remove({}).then((result) => {
	console.log(result);
}); */

Todo.findByIdAndRemove(id).then((todo) => {
	console.log(todo);
});
