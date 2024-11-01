const express = require("express")
const { getCord, getDeliveryDistance, calculateShipping } = require("../controllers/searchController")
const router = express.Router()

router.get("/", (req,res) => res.status(200).json({msg: "OK", status: 200}))
router.post("/search", express.json(), getCord, getDeliveryDistance)
router.post("/shipping", express.json(), getCord, calculateShipping)

module.exports = router