const mongoose = require('mongoose');

const messages = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
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
    status: {
        type: String,
        enum: ['sent', 'delivered', 'read'], // Message delivery status
        default: 'sent'
    }
}, { timestamps: true })
module.exports = mongoose.model('Messages', messages);