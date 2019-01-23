const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var pw = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(pw, salt, (err, hash) => {
		console.log(hash);
		console.log('------------');
		console.log(salt);
		console.log('------------');
		console.log(salt.length);
	});	
});


//var hs = '$2a$10$EoVQy7RMw9WvlzpGe/Vv0OgUxuGh4lwpv.RxGh9wmHsMHyYmbF/i2';
/* var hs = '$2a$10$u4H25xvUbWz5pA7Uiefihu.HQNRASN/65U2F3PwlP4AS.n.6RhAJ2';

bcrypt.compare(pw, hs, (err, res) => {
	console.log(res);
	console.log('--------');
	console.log(hs);
}); */



/* var data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log(decoded);

 */

/* var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`); */


