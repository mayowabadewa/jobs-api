const JobModel = require("./jobs.model")

const createJob =  async({
    title,
    description,
    location,
    salary,
    company,
    role,
    mode,
    experience,
    industry,
    expiryDate
}) => {

    const createJob = await JobModel.create({
        title,
        description,
        location,
        salary,
        company,
        role,
        mode,
        experience,
        industry,
        expiryDate
    })

    return createJob;

}

module.exports = {
    createJob
}