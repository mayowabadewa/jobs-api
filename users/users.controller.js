const UserService = require("./users.service");

const CreateUser = async (req, res) => {
    const ServiceResponse = await UserService.CreateUser(req.body);
    res.status(ServiceResponse.status).json(ServiceResponse.data);
}

const LoginUser = async (req, res) => {
    const ServiceResponse = await UserService.LoginUser(req.body);
    res.status(ServiceResponse.status).json(ServiceResponse.data);
}

module.exports = {
    CreateUser,
    LoginUser

}