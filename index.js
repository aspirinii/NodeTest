const express =require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./database'); // what is meaning of {}
//In summary, the main difference is in how the sequelize object is imported and assigned. The first line uses destructuring assignment to extract the sequelize property, while the second line(without {}) assigns the entire object to the sequelize variable.

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
