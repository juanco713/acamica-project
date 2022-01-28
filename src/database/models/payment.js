const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');


const Payment = sequelize.define("payment", {
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

module.exports = Payment;