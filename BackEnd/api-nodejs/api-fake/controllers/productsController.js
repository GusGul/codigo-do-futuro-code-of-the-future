const Product = require("../modelos/product");

module.exports = {
    index: async (req, res, next) => {
        const products = await Product.lista()
        res.status(200).send( products )
    },
    create: (req, res, next) => {
        const product = new Product(req.body)
        Product.salvar(product)
        res.status(201)
    }

};