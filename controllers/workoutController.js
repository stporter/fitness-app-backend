const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// LIST ALL WORKOUTS

router.get('/', async (req, res, next) => {
	try {
		const sequences = await Sequence.find({});
		res.json(sequences);
	} catch (error) {
		next(error);
	}
});

// LIST INDIVIDUAL WORKOUT BY ID

router.get('/sequenceDetails/:id', async (req, res, next) => {
	try {
		const sequence = await Sequence.findById(req.params.id);
		res.json(sequence);
	} catch (error) {
		next(error);
	}
});

// CREATE A NEW WORKOUT

router.post('/', async (req, res, next) => {
	try {
		const newSequence = await Sequence.create(req.body);
		res.json(newSequence);
	} catch (error) {
		next(error);
	}
});

// EDIT WORKOUT

router.put('/:id', async (req, res, next) => {
	try {
		const sequence = await Sequence.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(sequence);
	} catch (error) {
		next(error);
	}
});

// Edit/delete a pose within a sequence

router.put('/lift/:workoutId/:liftId', async (req, res, next) => {
	try {
		const findWorkout = await Workout.findById(req.params.workoutId);
		const newWorkoutLifts = findWorkout.workoutLifts.filter((lift) => {
			return lift._id.toString() !== req.params.liftId;
		});
		findWorkout.workoutLifts = [...newWorkoutLifts];
		const newFindWorkout = await Workout.findByIdAndUpdate(
			req.params.workoutId,
			findWorkout
		);
		res.json(findWorkout);
	} catch (error) {
		next(error);
	}
});

// DELETE A WHOLE WORKOUT

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);
		res.json(deletedWorkout);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
