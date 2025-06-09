const express = require("express")
const jobsController = require("./jobs.controller")


const router = express.Router()

//Create job
router.post("/", jobsController.createJobController)

module.exports = router;