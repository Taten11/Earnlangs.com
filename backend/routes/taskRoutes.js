'use strict';

const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/tasks', (req, res) => {
    // Logic to retrieve tasks
    res.status(200).json({ message: 'Retrieve all tasks' });
});

// GET /tasks/:id - Retrieve a specific task by ID
router.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Logic to retrieve a task by ID
    res.status(200).json({ message: `Retrieve task with ID: ${taskId}` });
});

// POST /tasks/:id/start - Start a specific task by ID
router.post('/tasks/:id/start', (req, res) => {
    const taskId = req.params.id;
    // Logic to start a task by ID
    res.status(200).json({ message: `Started task with ID: ${taskId}` });
});

// POST /tasks/:id/submit - Submit a specific task by ID
router.post('/tasks/:id/submit', (req, res) => {
    const taskId = req.params.id;
    // Logic to submit a task by ID
    res.status(200).json({ message: `Submitted task with ID: ${taskId}` });
});

module.exports = router;
