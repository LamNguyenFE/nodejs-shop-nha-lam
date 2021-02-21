const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        comment: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

//Schema
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    image: String,
    price: Number,
    fakePrice: Number,
    rating: Number,
    numReviews: Number,
    reviews: [reviewSchema],
}, {
    timestamps: true
})

productSchema.plugin(mongoosePaginate);
//mOdel
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product