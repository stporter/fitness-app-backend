const mongoose = require('../db/connection');

const WorkoutSchema = new mongoose.Schema({
	id: Number,
	workoutName: String,
	workoutExercises: [
		{
			id: Number,
			name: String,
			image: String,
			description: String,
		},
	],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
