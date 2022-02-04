const { getModel } = require('../database/index')


module.exports.getProduct = async () => {
    try {
        const Product = getModel('Product');
        const productsFound = await Product.findAll()
        if (!productsFound) {
            return { statusCode: 404, response: not_found }
        } else {
            return { statusCode: 200, response: productsFound }
        }
    } catch (error) {
        console.error(error);
    }
};

module.exports.createProduct = async (product) => {
    try {
        const Product = getModel('Product');
        const newProduct = await Product.create({
            name: product.name,
            price: product.price,
            description: product.description
        });

        if (newProduct) {
            return { statusCode: 201, response: `${newProduct.name} created!` }
        } else {
            return { statusCode: 400, response: 'Something went wrong' }
        }
    } catch (error) {
        console.error(error).status(500);
    }
};


module.exports.deleteProduct = async (id) => {
    try {
        const Product = getModel('Product');
        const idProduct = id;
        const productFound = await Product.findOne({
            where: {
                id: idProduct
            }
        });
        if (!productFound) {
            return { statusCode: 404, response: 'not_found' }
        } else {
            await productFound.destroy();
            return { statusCode: 200, response: `${productFound.name} deleted` }
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports.updateProduct = async (id, product) => {
    try {
        const Product = getModel('Product');
        const idProduct = id;
        const productFound = await Product.findByPk(idProduct);

        if (!productFound) {
            return { statusCode: 404, response: 'not_found' }
        } else {
            await productFound.update({
                name: product.name,
                price: product.price,
                description: product.description
            });

            await productFound.save();
            return { statusCode: 204, response: productFound }
        }
    } catch (error) {
        console.error(error)
    }
}


