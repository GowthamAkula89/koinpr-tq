const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const mongoose = require("mongoose");
const {OfferingsData} = require("../models/offering.model")
const addOffering = async(offeringDetails)=>{
    try {
        const offering = await OfferingsData.create(offeringDetails);
        return offering;
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
const getOfferings = async() => {
    const offerings = await OfferingsData.find({}).catch((error) => {
        if (mongoose.Error.ValidationError) {
          throw new ApiError(httpStatus.BAD_REQUEST, "Filed to fetch the data");
        }
    });
    return offerings;
}
module.exports = {
    addOffering,
    getOfferings
}