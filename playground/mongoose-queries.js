const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c43056f6935f4130860790a1';

if (!ObjectID.isValid(id)) {
	console.log('Id is not valid.');
}

// return an array
Todo.find({_id: id}).then( (todos) => {
	console.log('Todos: ', todos);
});

//Find at most one document
Todo.findOne({_id: id}).then( (todo) => {
	console.log('---------------');
	console.log('---------------');
	console.log('Todo: ', todo);
});

Todo.findById(id).then( (todo) => {
	console.log('---------------');
	console.log('---------------');
	if (!todo) {
		return console.log('Id Not Found');
	}
	console.log('Todo By ID: ', todo);
}).catch((e) => console.log(e));




