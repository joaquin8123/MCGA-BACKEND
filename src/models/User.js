const { mongoose, Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        user: {
            type: String,
            required: 'user is required.'
        },
        password: {
            type: String,
            required: 'Password is required.'
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Users', UserSchema);