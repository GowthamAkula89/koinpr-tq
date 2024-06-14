const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    cartDetails: {
        type: Array,
        required: true
    },
    transactionDetails: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true,
});

const TransactionData = mongoose.model("TransactionData", transactionSchema);

module.exports = {
    TransactionData
};
