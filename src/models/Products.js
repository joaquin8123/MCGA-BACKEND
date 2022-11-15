const { mongoose, Schema } = require('mongoose');

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: 'name is required.'
        },
        // description: {
        //     type: String
        // },
        // category: {
        //     type: String,
        //     required: 'Category is required.'
        // },
        price: {
            type: Number,
            required: 'Price is required.'
        },
        stock: {
            type: Number
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

module.exports = mongoose.model('Products', ProductSchema);