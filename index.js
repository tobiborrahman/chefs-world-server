const express = require('express');
const app = express();
const port = 5000;

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});

app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
