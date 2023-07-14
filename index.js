const express =require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database');

async function launchServer() {
	const app = express();
	app.use(bodyParser.json());

	app.get('/', (req, res) => {
		res.json({ message: 'Hello CoronaBoard!' });
	});

	try{
		await sequelize.sync();
		console.log('Connection has been established successfully. Database synced.');
	}catch(error){
		console.error('Unable to connect to the database:', error);
		console.log(error);
		process.exit(1);
	}

	const port = process.env.PORT || 8080 // 1. or  2. IF left is "false, null, undefined", right will apply
	app.listen(port, () => {
		console.log(`Server is running on port ${port}.`);
	});
}

launchServer();
