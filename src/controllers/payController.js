const repo = require('../repositories/payment')


module.exports.get = async(req,res) => {
    const data = await repo.getPaymethod();
    res.json(data);
}

module.exports.delete = async(req,res) => {
    const data = await repo.deletePaymethod(req.params.id);
    res.json(data);
}

module.exports.create = async (req,res) => {
    const data = await repo.createPaymethod(req.body);
    res.json(data)
};

module.exports.update = async (req,res) => {
    const data = await repo.updatePaymethod(req.params.id,req.body);
    res.json(data);
}