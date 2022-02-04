const { getModel } = require('../database/index');

module.exports.roleRepo = {

    getRole: async () => {
        try {
            const Role = getModel('Role');
            const allRoles = await Role.findAll();
            return { statusCode: 200, response: allRoles };
        } catch (error) {
            console.error(error)
        };
    },
    createRole: async (body) => {
        try {
            const Role = getModel('Role');
            const newRole = await Role.create({
                name: body.name
            });
            return { statusCode: 201, response: `new Role: ${newRole.name}` }
        } catch (error) {
            console.error(error);
        }
    }


    
}