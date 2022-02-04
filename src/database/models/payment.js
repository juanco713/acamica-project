const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index');

function createPaymentModel(connection){
    const Payment = connection.define("payment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            allowNull:true
        }
    }, {
        timestamps: false
    });
    return Payment;
}

module.exports = {createPaymentModel};