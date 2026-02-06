const express = require('express');
const router = express.Router();

// GET /wallet/balance
router.get('/balance', (req, res) => {
    // Placeholder for retrieving the wallet balance
    res.json({ balance: 100 }); // Example response
});

// GET /wallet/transactions
router.get('/transactions', (req, res) => {
    // Placeholder for retrieving wallet transactions
    res.json([{ id: 1, amount: -50, date: '2026-02-01' }, { id: 2, amount: 100, date: '2026-02-05' }]); // Example response
});

// POST /wallet/withdraw
router.post('/withdraw', (req, res) => {
    const { amount } = req.body;
    // Placeholder for withdrawing from wallet
    if (amount > 0) {
        res.json({ message: `Withdrew ${amount}` }); // Example response
    } else {
        res.status(400).json({ error: 'Invalid amount' });
    }
});

module.exports = router;