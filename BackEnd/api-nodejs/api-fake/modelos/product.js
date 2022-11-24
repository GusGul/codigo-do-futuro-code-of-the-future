module.exports = class Product {
    constructor(product){
        this.id = product?.id
        this.name = product?.name
        this.description = product?.description
        this.price = product?.price
    }

    // metodos staticos
    static async salvar(product){
        const listaProducts = await this.lista()
        let exist = false
        for(let i=0; i<listaProducts.length; i++){
            const productDb = listaProducts[i]
            if(productDb.id == product.id){
                productDb.name == product.name
                productDb.description == product.description
                productDb.price == product.price
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...product}
            listaProducts.push(objectLiteral)
        }

        const fs = require('fs');

        try {
            fs.writeFileSync('db/products.json', JSON.stringify(listaProducts), {encoding: "utf8"});
        } catch (err) {
            console.error(err);
        }
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