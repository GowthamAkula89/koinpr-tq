const mongoose = require("mongoose");

const offeringSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    },
    websiteName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    websiteUrl: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    telegramId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    }
});
const OfferingsData = mongoose.model("OfferingsData", offeringSchema);
module.exports = {
    OfferingsData
}
