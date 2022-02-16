const express = require('express');

const router = express.Router();

const Exercise = require('../models/Exercise');

const { del } = require('express/lib/application');

// LIST OF ALL EXERCISES

router.get('/', async (req, res, next) => {
	try {
		const exercise = await Exercise.find({});
		res.json(exercise);
	} catch (error) {
		next(error);
	}
});

// LIST SINGLE EXERCISE

router.get('/:id', async (req, res, next) => {
	try {
		const exercise = await Exercise.findById(req.params.id);
		if (exercise) {
			res.json(exercise);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// CREATE EXERCISE

router.post('/', async (req, res, next) => {
	try {
		const newExercise = await Exercise.create(req.body);
		res.status(201).json(newExercise);
	} catch (error) {
		next(error);
	}
});

// UPDATE EXERCISE

router.put('/:id', async (req, res, next) => {
	try {
		const exerciseToUpdate = await Exercise.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json(exerciseToUpdate);
	} catch (error) {
		next(error);
	}
});

// DELETE EXERCISE

router.delete('/:id', async (req, res, next) => {
	try {
		const exerciseToDelete = await Exercise.findByIdAndDelete(req.params.id);
		const exercise = await Exercise.find({});
		res.json(exercise);
		if (exerciseToDelete) {
			res.sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// EXPORT

module.exports = router;
