var express = require('express'); //web application framework also called ExpressJS

var app = express();

/* http://localhost:3000 */
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

/* http://localhost:3000/login */
app.post('/login', function(req, res) {
	res.end("Login Successful.");
});

/* http://localhost:3000/queryProducts */
app.get('/queryProducts', function(req, res) {

	res.json([{name: 'iPhone7'}, {name: 'iPad mini'}]);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Server running on port 3000"); /* http://localhost:3000 */
});

console.log("a-quote-a-day project started");