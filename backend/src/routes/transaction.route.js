const express =  require("express");
const transactionRoutes = require("../controllers/transactions.controller")
const router = express.Router();
router.get("/", transactionRoutes.getTransactions);
router.post("/", transactionRoutes.addTransaction );
module.exports = router;