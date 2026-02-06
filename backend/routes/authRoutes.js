const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// POST /signup
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save the user with hashed password to the database
    // For example: await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User created' });
});

// POST /login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Find user in the database
    // const user = await User.findOne({ username });
    // if (!user) return res.status(404).json({ message: 'User not found' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

// POST /forgot-password
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    // Logic to handle password reset (e.g., send a reset link)
    res.json({ message: 'Password reset link sent' });
});

module.exports = router;