const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to the MongoDb server.');
	}
	console.log('Success! Connected to the server.');
	
	const TodoApp = db.db('TodoApp');
	/* TodoApp.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c405cf785ae389ca62181df')
	}, {
		$set: {
			completed:true
		}
	}, {returnOriginal: false}).then( (result) => {
		console.log(result);
	}); */
	
	TodoApp.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c3f2062c40ded126c6870a4')
	}, {
		$set: {
			name:'Mike'
		},
		$inc: {
			Age: 1
		}
	}, {returnOriginal: false}).then( (result) => {
		console.log(result);
	});
	
	//db.close();
}); 



//github.com/jyhorton/Node-todo-api