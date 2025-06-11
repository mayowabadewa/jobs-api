const joi = require("joi")

const createJobValidator = async(req, res, next) => {
    try {
        
        const payload = req.body
    
        const schema = joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            location: joi.string().required(),
            salary: joi.string().required(),
            role: joi.string().required(),
            industry: joi.string().required(),
            company: joi.string().required(),
            mode: joi.string().valid("onsite", "remote", "hybrid").required(),
            experience: joi.string().required(),
            expiryDate: joi.date().required()
        })
    
        const validationResponse = await schema.validateAsync(payload)
        console.log({validationResponse})
    
    
        if (validationResponse) {
            next()
        } else {
            return res.status(400).json({
                status: "error",
                message: "Invalid payload"
            })
        }
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

module.exports = {
    createJobValidator
}