const Log = require('../models/Log')

// controllers/logs.js

const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index route
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.render('logs/Index', { logs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// New route
router.get('/new', (req, res) => {
  res.render('logs/New');
});

// Create route
router.post('/', async (req, res) => {
  try {
    await Log.create(req.body);
    res.redirect('/logs');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Show route
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('logs/Show', { log });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Edit route
router.get('/:id/edit', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('logs/Edit', { log });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update route
router.put('/:id', async (req, res) => {
  try {
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/logs');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete route
router.delete('/:id', async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect('/logs');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
