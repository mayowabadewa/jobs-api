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

const GetAllJobs = async({location, status, mode}) => {
    const query = {}

    if (location) {
        query.location = location;
    }
    if (status) {
        query.status = status;
    }
    if (mode) {
        query.mode = mode;
    }

    const jobs = await JobModel.find(query);
    return jobs;
}

module.exports = {
    createJob,
    GetAllJobs
}