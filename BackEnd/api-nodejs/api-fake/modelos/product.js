module.exports = class Product {
    constructor(product){
        this.id = product?.id
        this.name = product?.name
        this.description = product?.description
        this.price = product?.price
    }

    static async lista(){
        let products = []
        const fs = require('fs');

        try {
            const jsonProducts = await fs.readFileSync('db/products.json', 'utf8');
            products = JSON.parse(jsonProducts)
        } catch (err) {
            console.error(err);
        }
        
        return products
    }
}