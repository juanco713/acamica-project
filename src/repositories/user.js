const { getModel } = require('../database/index');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.repoUser = {

    signUp: async (body) => {
        const User = getModel('User');
        const Role = getModel('Role');
        let newUser = await User.build({
            username: body.username,
            name: body.name,
            lastname: body.lastname,
            email: body.email,
            phone: body.phone,
            adress: body.adress,
            password: body.password
        });
        console.log(newUser)
        const role = await Role.findOne({ where: { name: "user" } });
        newUser.roleId = role.id;
        await newUser.save();


        const user = { id: newUser.id, username: newUser.username, role: newUser.roleId };

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

        return { statusCode: 201, response: { token: accessToken } };
    },

    signIn: async (user) => {
        const User = getModel('User');
        const userFound = await User.findOne({
            where: {
                email: user.email,
                password: user.password
            }
        });

        if (userFound) {
            const user = { id: userFound.id, username: userFound.username, role: userFound.roleId };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            return { statusCode: 200, response: { token: accessToken } };
        } else {
            return { statusCode: 404, response: 'not_found' }
        }
    }
}