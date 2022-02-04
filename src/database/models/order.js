const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index');

function createOrderModel(connection) {
    const Order = connection.define("order", {
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
    return Order;
}

module.exports = {createOrderModel};