const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to the MongoDb server.');
	}
	console.log('Success! Connected to the server.');
	
	
	const TodoApp = db.db('TodoApp')
	TodoApp.collection('Users').find({name: 'Mike'}).toArray().then( (docs) => {
		console.log(JSON.stringify(docs, undefined, 2));		
	} , (err) => {
		console.log('Unable to fetch the data', err);
	});
	
	/* TodoApp.collection('Users').find({name: 'Mike'}).count().then( (count) => {
		console.log(`Users count: ${count}`);		
	} , (err) => {
		console.log('Unable to fetch the data', err);
	}); */

	//db.close();
});



