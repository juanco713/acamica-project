const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./src/database/index.js');
const Order = require('./src/database/models/order');
const Product = require('./src/database/models/product');
const User = require('./src/database/models/users');
const Role = require('./src/database/models/role');
const Payment = require('./src/database/models/role');





async function serverConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established');
        app.use(express.json());
        app.listen(process.env.PORT, () => {
            console.log(`Server running in port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }

};


serverConnection();