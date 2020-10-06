const { User } = require('../models');
const bcrypt = require('bcrypt');
const UserController = {

    async signup(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({ error, message: 'There was a problem trying to register the user' })
        }
    },
    login() {}
}

module.exports = UserController;