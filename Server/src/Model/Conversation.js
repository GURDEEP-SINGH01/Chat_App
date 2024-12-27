const mongoose = require('mongoose');

const conversation = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Messages',
        default: []
    }]
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversation);