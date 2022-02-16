const Exercise = require('../models/Exercise');
const Workout = require('../models/Workout');

const exerciseSeeds = require('./seeds.json');
const workoutSeeds = require('./workout.json');

Exercise.deleteMany({})
	.then(() => {
		console.log('Deleted all exercises!');
		return Exercise.insertMany(exerciseSeeds);
	})
	.catch(console.error);

Workout.deleteMany({})
	.then(() => {
		console.log('Deleted all workouts!');
		return Workout.insertMany(workoutSeeds);
	})
	.catch(console.error);
