const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const chefs = require('./data/chefs.json');
// const recipes = require('./data/recipe.json');

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
	const id = req.params.id;
	const selectedChefs = chefs.find((chef) => chef.id == id);
	console.log(selectedChefs);
	res.send(selectedChefs);
});

app.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
