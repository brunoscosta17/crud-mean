const User = require('../models/users');

const userController = {};

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userController.getUser = function() {

};

userController.createUser = async (req, res) => {
    console.log(req.body);
};

userController.editUser = function() {
    
};

userController.deleteUser = function() {

};

module.exports = userController;