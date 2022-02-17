require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL; // DATABASE_URL needs update
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) => {
	console.log(err.message + 'is Mongodb not running?');
});

db.on('connected', () => {
	console.log('mongo connected at: ', mongoURI);
});

db.on('disconnected', () => {
	console.log('mongo disconnected');
});

db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;
