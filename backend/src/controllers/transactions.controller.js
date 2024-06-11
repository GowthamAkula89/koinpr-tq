const catchAsync=require("../utils/catchAsync");
const transactionServices = require("../services/transactions.service")
const getTransactions = catchAsync(async (req, res) => {
    const transactions = await transactionServices.getTransactions();
    res.json({transactions});
});
const addTransaction = catchAsync( async(req,res)=>{
    const transaction = await transactionServices.addTransaction(req.body);
    res.send(transaction);

})
module.exports = {
    getTransactions,
    addTransaction
}