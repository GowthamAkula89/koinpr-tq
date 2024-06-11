const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");
const {TransactionData} = require("../models/transaction.model")
const addTransaction = async(transactionDetails)=>{
    try {
        const transaction = await TransactionData.create(transactionDetails);
        return transaction;
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Validation error: " + error.message);
        } else if (error.code === 11000) {
            throw new ApiError(httpStatus.BAD_REQUEST, "Website name already exists");
        } else {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occurred");
        }
    }
}
const getTransactions = async() => {
    const transactions = await TransactionData.find({}).catch((error) => {
        if (mongoose.Error.ValidationError) {
          throw new ApiError(httpStatus.BAD_REQUEST, "Filed to fetch the data");
        }
    });
    return transactions;
}
module.exports = {
    addTransaction,
    getTransactions
}