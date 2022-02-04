const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config();
const {connectDB} = require('./src/database/index');

async function main() {
    const { DB_NAME, DB_USERNAME, DB_PASSWORD,DB_HOST } = process.env;

        app.use(express.json());
        app.use(bodyParser.json());
        app.use(require('./src/routes/productRoute'))
        app.use(require('./src/routes/paymentRoute'))
        app.use(require('./src/routes/roleRoute'))
        app.use(require('./src/routes/userRoute'))
        app.listen(process.env.PORT, () => console.log(`Conected to port ${process.env.PORT}`));
        await connectDB(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
};


main();