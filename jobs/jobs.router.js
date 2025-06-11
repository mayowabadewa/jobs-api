const express = require("express");
const router = express.Router();

const jobsController = require("./jobs.controller");
const jobsMiddleware = require("./jobs.middleware");
const userMiddleware = require("../users/users.middleware")

router.use(userMiddleware.AuthorizeUser)

//Create job
router.post(
  "/",
  jobsMiddleware.createJobValidator,
  jobsController.createJobController
);

router.get("/", jobsController.getJobsController);

module.exports = router;
