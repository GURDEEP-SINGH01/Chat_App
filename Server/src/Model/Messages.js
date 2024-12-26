const mongoose = require('mongoose');

const messages = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String, // The message text
        required: true
    },
    media: {
        type: String, // Optional URL for attachments (e.g., images, files)
        default: null
    },
    timestamp: {
        type: Date,
        default: Date.now // When the message was sent
    },
    status: {
        type: String,
        enum: ['sent', 'delivered', 'read'], // Message delivery status
        default: 'sent'
    }
})
module.exports = mongoose.model('Messages', messages);