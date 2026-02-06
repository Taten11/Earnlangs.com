const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    totalEarned: {
        type: Number,
        required: true,
        default: 0
    },
    totalWithdrawn: {
        type: Number,
        required: true,
        default: 0
    },
    minWithdrawal: {
        type: Number,
        required: true,
        default: 1
    },
    maxWithdrawal: {
        type: Number,
        required: true,
        default: 1000
    },
    transactions: [
        {
            type: {
                type: String,
                enum: ['credit', 'debit'],
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            status: {
                type: String,
                enum: ['pending', 'completed', 'failed'],
                default: 'pending'
            }
        }
    ],
}, { timestamps: true });

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;