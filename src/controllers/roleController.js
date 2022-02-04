const { roleRepo }  = require('../repositories/role');

module.exports.controllerRole = {

    get: async (req,res) => {
        const data = await roleRepo.getRole();
        res.json(data);
    },

    create: async(req,res) => {
        const data = await roleRepo.createRole(req.body);
        res.json(data);
    }
};