const catchAsync=require("../utils/catchAsync");
const offeringServices = require("../services/offering.service")
const getOfferings = catchAsync(async (req, res) => {
    const offerings = await offeringServices.getOfferings();
    res.json({offerings});
});
const addOffering = catchAsync( async(req,res)=>{
    const offering = await offeringServices.addOffering(req.body);
    res.send(offering);

})
module.exports = {
    getOfferings,
    addOffering
}