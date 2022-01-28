const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Role = sequelize.define("role", {
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

module.exports = Role;