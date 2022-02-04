const { repoUser } = require('../repositories/user');

module.exports.userController = {

    create: async(req,res) => {
        const data = await repoUser.signUp(req.body);
        res.json(data);
    }
}