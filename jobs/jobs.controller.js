const JobService = require("./jobs.service");

const createJobController = async (req, res) => {
  try {
    const payload = req.body;

    // console.log({ payload });

    const response = await JobService.createJob({
      title: payload.title,
      description: payload.description,
      location: payload.location,
      salary: payload.salary,
      company: payload.company,
      role: payload.role,
      industry: payload.industry,
      mode: payload.mode,
      experience: payload.experience,
      expiryDate: payload.expiryDate,
    });

    if (response) {
      return res.status(201).json({
        message: "Job created successfully",
        data: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
        message: "Internal Server error",
        error: error.message
    })
  }
};

const getJobsController = async (req, res) => {
    try {
        const {location, status, mode} = req.query;

      const response = await JobService.GetAllJobs({
        location,
        status,
        mode
      });

            return res.status(200).json({
                message: "Jobs fetched successfully",
                data: response
            })

    
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message
        }) 
    }
};

module.exports = {
  createJobController,
  getJobsController
};
