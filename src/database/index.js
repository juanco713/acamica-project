const Sequelize = require('sequelize');
const {createOrderModel} = require('./models/order');
const {createProductModel} = require('./models/product');
const {createUserModel} = require('./models/users');
const {createRoleModel} = require('./models/role');
const {createPaymentModel} = require('./models/payment');


const models = {};

async function connectDB(host,username,password,database){
    const connection = new Sequelize({
        host,
        username,
        password,
        database,
        dialect: 'mariadb'
    });

    models.Order = createOrderModel(connection);
    models.Product = createProductModel(connection);
    models.User = createUserModel(connection);
    models.Role = createRoleModel(connection);
    models.Payment = createPaymentModel(connection);

    models.User.belongsTo(models.Role);
    models.Order.belongsTo(models.User);
    models.Order.belongsTo(models.Product);
    models.Order.belongsTo(models.Payment);

    try {
        await connection.authenticate();
        await connection.sync();
        console.log('Connection has been established');
    } catch (error) {
        console.error(error);
    }
};

function getModel(name) {
    return models[name];
};

module.exports={connectDB, getModel};



