const { mongoose, Schema } = require('mongoose');

const SupplierSchema = new Schema(
    {
        name: {
            type: String,
            required: 'name is required.'
        },
        description: {
            type: String,
            required: 'Description is required.'
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

module.exports = mongoose.model('Suppliers', SupplierSchema);