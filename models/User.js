const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    date_of_birth: {
        type: Date,
    },
    location: {
        country: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        area: {
            type: String,
        },
    }
});

module.exports = model('User', userSchema);
