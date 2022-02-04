const repo = require('../repositories/product');


module.exports.get = async function(req,res){
    const data = await repo.getProduct();
    res.json(data)
};

module.exports.create = async function(req,res){
    const product = await repo.createProduct(req.body);
    res.json(product);
};

module.exports.delete = async function(req,res) {
    const data = await repo.deleteProduct(req.params.id);
    res.json(data);
};

module.exports.update = async function(req,res) {
    const data = await repo.updateProduct(req.params.id, req.body);
    res.json(data);
}