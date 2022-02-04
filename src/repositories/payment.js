const { getModel } = require('../database/index');


module.exports.getPaymethod = async () => {
    try {
        const Payment = getModel('Payment');
        const payMethods = await Payment.findAll();
        return { statusCode: 200, response: payMethods }
    } catch (error) {
        console.error(error).status(500);
    }
};

module.exports.createPaymethod = async (pay) => {
    try {
        const Payment = getModel('Payment');
        const newPay = await Payment.create({
            name: pay.name,
            description: pay.description
        });

        return { statusCode: 201, response: newPay }
    } catch (error) {
        console.error(error);
    }
}



module.exports.deletePaymethod = async (id) => {
    const Payment = getModel('Payment');
    const idPay = id;
    const payMethod = await Payment.findByPk(idPay);

    if (!payMethod) {
        return { statusCode: 404, response: 'not_found' }
    } else {
        await payMethod.destroy();
        return { statusCode: 200, response: `${payMethod.name} deleted` }
    }
};

module.exports.updatePaymethod = async (id, body) => {
    const Payment = getModel('Payment');
    const idPay = id;
    const payMethod = await Payment.findByPk(idPay);

    if(!payMethod) {
        return { statusCode: 404, response: 'not_found' } 
    } else {
        const updatePay = await payMethod.update({
            name: body.name,
            description: body.description
        });

        await updatePay.save();
        return { statusCode: 200, response: updatePay}
    }
}