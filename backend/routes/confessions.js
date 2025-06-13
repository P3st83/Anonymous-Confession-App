const express = require('express');
const router = express.Router();
const Confession = require('../models/Confession');

// Get all confessions
router.get('/', async (req, res) => {
  const confessions = await Confession.find();
  res.json(confessions);
});

// Post a new confession
router.post('/', async (req, res) => {
  const confession = new Confession(req.body);
  await confession.save();
  res.status(201).json(confession);
});

module.exports = router;
