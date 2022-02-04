const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index');

function createProductModel(connection){
    const Product = connection.define("product", {
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
        price: {
            type: DataTypes.STRING,
            defaultValue: 0,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false
    });
    return Product;
}

module.exports = {createProductModel};