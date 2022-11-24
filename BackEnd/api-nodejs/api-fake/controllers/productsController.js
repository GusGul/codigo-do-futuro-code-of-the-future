const Product = require("../modelos/product");

module.exports = {
    index: async (req, res, next) => {
        const products = await Product.lista()
        res.status(200).send( products )
    },
    create: (req, res, next) => {
        const product = new Product(req.body)
        product.id = new Date().getTime()
        Product.salvar(product)
        res.status(201).send(product)
    },
    delete: (req, res, next) => {
        Product.apagarPorId(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let productDb = await Product.buscaPorId(req.params.id)
        if(!productDb) return res.status(404).send({mensagem: "Product não encontrado"})

        const product = new Product(req.body)
        product.id = productDb.id
        Product.salvar(product)
        res.status(200).send(product)
    },
    show: async (req, res, next) => {
        let productDb = await Product.buscaPorId(req.params.id)
        if(!productDb) return res.status(404).send({mensagem: "Product não encontrado"})
        res.status(200).send(productDb)
    }

};