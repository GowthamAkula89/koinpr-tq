const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    }
    },
    {
        timestamps: true,
    }
);
const TransactionData = mongoose.model("TransactionData", transactionSchema);
module.exports = {
    TransactionData
}
