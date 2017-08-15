const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req, res) => {
	res.status(200).send([
		{
			name: 'User A',
			age: 25
		},
		{
			name: 'User B',
			age: 30
		},
		{
			name: 'User C',
			age: 35
		}
	]);
});

app.listen(3000);

module.exports = {
	app
};
