const {MongoClient, ObjectID} = require('mongodb');

//https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to the MongoDb server.');
	}
	console.log('Success! Connected to the server.');
	
	// https://stackoverflow.com/questions/43779323/typeerror-db-collection-is-not-a-function
	const TodoApp = db.db('TodoApp');
	// deleteMany
	/* TodoApp.collection('Todos').deleteMany({text: 'Go to the work'}).then((result) => {
		console.log(result);
	}); */
	
	// deleteOne
	/* TodoApp.collection('Todos').deleteOne({text: 'Go to the work'}).then((result) => {
		console.log(result);
	}); */
	
	// findOneAndDelete
	TodoApp.collection('Users').findOneAndDelete({_id: new ObjectID('5c3f26e686698b0eb448fdc7')}).then((result) => {
		console.log(result);
	});
	
	//db.close();
}); 



//DeprecationWarning: current URL string parser is deprecated,pass option { useNewUrlParser: true } to MongoClient.connect.