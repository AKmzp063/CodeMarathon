const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    theme: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

module.exports = Hackathon;