const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    open: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});

module.exports = Order;