const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['survey', 'task', 'app-install', 'review', 'micro-task'], 
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'expired'], 
        default: 'pending'
    },
    completionTime: {
        type: Date 
    },
    maxParticipants: {
        type: Number,
        required: true
    },
    currentParticipants: {
        type: Number,
        default: 0
    },
    requirements: {
        type: String 
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date 
    }
});

// Create Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;