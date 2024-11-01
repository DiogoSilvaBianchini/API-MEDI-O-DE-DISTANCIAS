const express = require("express")
const { getCord, getDistance } = require("../controllers/searchController")
const router = express.Router()

router.get("/", (req,res) => res.status(200).json({msg: "OK", status: 200}))
router.post("/search", express.json(), getCord, getDistance)
module.exports = router