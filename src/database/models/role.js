const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index');

function createRoleModel(connection) {
    const Role = connection.define("role", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    }, {
        timestamps: false
    });
    return Role;
}

module.exports = {createRoleModel};