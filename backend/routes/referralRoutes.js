const express = require('express');
const router = express.Router();

// GET /referrals/link
router.get('/link', (req, res) => {
    // Your logic to handle the link generation
    res.send('Referral link');
});

// GET /referrals/stats
router.get('/stats', (req, res) => {
    // Your logic to handle the stats retrieval
    res.send('Referral stats');
});

module.exports = router;