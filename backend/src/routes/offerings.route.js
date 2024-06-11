const express =  require("express");
const offeringsRoute = require("../controllers/offerings.controller");
const router = express.Router();
router.post("/", offeringsRoute.addOffering);
router.get("/",offeringsRoute.getOfferings);
module.exports = router;