const mongoose = require("mongoose");

const allowedContentSchema = new mongoose.Schema({
    gambling: {
        type: Boolean,
        required: true
    },
    adultContent: {
        type: Boolean,
        required: true
    },
    cryptoWeb3: {
        type: Boolean,
        required: true
    }
}, { _id: false });

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
    companyLogo: {
        type: Buffer,
        required: false
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    telegramId: {
        type: String,
        required: true,
        trim: true
    },
    contentLang: {
        type: [String],
        required: true
    },
    regions: {
        type: [String],
        required: true,
        validate: [arrayLimit, '{PATH} exceeds the limit of 5']
    },
    allowedContent: {
        type: allowedContentSchema,
        required: true
    },
    offering:{
        type:String,
        required:true
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

function arrayLimit(val) {
    return val.length <= 5;
}

const OfferingsData = mongoose.model("OfferingsData", offeringSchema);

module.exports = {
    OfferingsData
};
