// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

// Redirect
app.get('/', (req, res) => {
	res.redirect('/fitnessapp');
});

// Controllers
const Exercise = require('./controllers/exerciseController');
app.use('/fitnessapp/exercise', Exercise);

const Workout = require('./controllers/workoutController');
app.use('/fitnessapp/workout', Workout);

app.listen(app.get('port'), () => {
	console.log('Hello world! Fitness App API Listening ' + app.get('port'));
});

module.exports = app;
