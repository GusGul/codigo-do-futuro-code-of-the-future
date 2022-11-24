const Product = require("../modelos/product");

module.exports = {
    index: async (req, res, next) => {
        const products = await Product.lista()
        res.status(200).send( products )
    }
};