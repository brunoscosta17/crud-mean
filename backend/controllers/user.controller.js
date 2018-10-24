const User = require('../models/users');

const userController = {};

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

userController.createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        birth: req.body.birth
    });
    await user.save();
    res.json({
        'status': "Usuário salvo com sucesso!"
    });
};

userController.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        birth: req.body.birth
    };
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({ status: 'Usuário atualizado com sucesso!' });
};

userController.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuário removido com sucesso!' });
};

module.exports = userController;