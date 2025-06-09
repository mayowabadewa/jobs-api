const JobService = require("./jobs.service")

const createJobController = async(req, res) => {
    const payload = req.body

    const response = await JobService.createJob({
        title: payload.title,
        description: payload.description,
        location: payload.location,
        salary: payload.salary,
        company: payload.company,
        mode: payload.mode,
        experience: payload.experience,
        expiryDate: payload.expiryDate
    })

    if (response) {
        return res.status(201).json({
            message: "Job created successfully",
            data: response
        })
    }
}

module.exports = {
    createJobController
}