const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipe.json');

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});

app.get('/recipes', (req, res) => {
	res.send(recipes);
});

app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
