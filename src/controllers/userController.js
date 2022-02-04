const { repoUser } = require('../repositories/user');

module.exports.userController = {

    signUp: async(req,res) => {
        const data = await repoUser.signUp(req.body);
        res.json(data);
    },

    signIn: async (req,res) => {
        const data = await repoUser.signIn(req.body);
        res.json(data);
    } 
};