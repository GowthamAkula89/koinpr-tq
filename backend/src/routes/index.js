const express = require ("express");
const offeringRoutes = require("./offerings.route");
const transactionRoutes = require("./transaction.route");
const router = express.Router()
router.use("/offerings", offeringRoutes)
router.use("/transactions", transactionRoutes)
module.exports = router;