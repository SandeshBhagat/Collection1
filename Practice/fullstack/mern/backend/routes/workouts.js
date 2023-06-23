const express = require('express');
const workout = require('../models/workoutModel');
const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
	res.json({ message: 'GET all workouts' });
});
// get single workout
router.get('/:id', (req, res) => {
	res.json({ message: 'GET single workout' });
});
// post a new workout
router.post('/', async (req, res) => {
	const { title, reps, load } = req.body;

	try {
		const Workout = await workout.create({title, reps, load})
		res.status(200).json(Workout)
	} catch (error) {
		  res.status(400).json({error: error.message})
	}
	// res.json({ message: 'POST a new workout' });
});
// delete a workout
router.delete('/:id', (req, res) => {
	res.json({ message: 'DELETE a new workout' });
});
// update a new workout
router.patch('/:id', (req, res) => {
	res.json({ message: 'UPDATE a new workout' });
});

module.exports = router;
