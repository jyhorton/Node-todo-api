const {MongoClient, ObjectID} = require('mongodb');

//https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to the MongoDb server.');
	}
	console.log('Success! Connected to the server.');
	// https://stackoverflow.com/questions/43779323/typeerror-db-collection-is-not-a-function
	const TodoApp = db.db('TodoApp')
	
	/* TodoApp.collection('Todos').insertOne({text: 'Something to do', completed: false}, (err, result) => {
		if (err) {
			return console.log('Unable to add todo.', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));	
	});	 */
	
	TodoApp.collection('Users').insertOne({name: 'Mike', Age: 25, Location: 'US'}, (err, result) => {
		if (err) {
			return console.log('Unable to add user.', err);
		}
		console.log(result.ops[0]._id.getTimestamp());	
	});	
	db.close();
});



