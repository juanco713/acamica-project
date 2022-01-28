const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index');

const Order = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        unique: true,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    open: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    payment: {
        type: DataTypes.INTEGER,
        field: 'pay_id',
        unique: true,
        references: {
            model: 'Payment',
            key: 'id'
        }
    },
    products: {
        type: DataTypes.ARRAY
    }
}, {
    timestamps: false
});

module.exports = Order;