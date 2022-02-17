const mongoose = require('../db/connection');

const ExerciseSchema = new mongoose.Schema({
	id: Number,
	name: String,
	image: String,
	image2: String,
	description: String,
	categories: [
		{
			primaryMuscleGroup: String,
			secondaryMuscleGroup: String,
		},
	],
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
