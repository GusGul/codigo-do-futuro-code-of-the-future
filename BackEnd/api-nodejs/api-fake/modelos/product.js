module.exports = class Product {
    constructor(product){
        this.id = product?.id
        this.name = product?.name
        this.description = product?.description
        this.price = product?.price
    }

    // metodos staticos
    static async apagarPorId(id){
        const listaProducts = await this.lista()
        const listaNova = []
        for(let i=0; i<listaProducts.length; i++){
            const productDb = listaProducts[i]
            if(productDb.id.toString() !== id.toString()){
                listaNova.push(productDb)
            }
        }

        Product.salvarJsonDisco(listaNova)
    }
    
    static async buscaPorId(id){
        const listaProducts = await this.lista()
        for(let i=0; i<listaProducts.length; i++){
            const productDb = listaProducts[i]
            if(productDb.id.toString() === id.toString()){
                return productDb
            }
        }

        return null
    }

    static async salvar(product){
        const listaProducts = await this.lista()
        let exist = false
        for(let i=0; i<listaProducts.length; i++){
            const productDb = listaProducts[i]
            if(productDb.id.toString() === product.id.toString()){
                productDb.name = product.name
                productDb.description = product.description
                productDb.price = product.price
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...product}
            listaProducts.push(objectLiteral)
        }

        Product.salvarJsonDisco(listaProducts)
    }

    static async salvarJsonDisco(products){
        const fs = require('fs');

        try {
            fs.writeFileSync('db/products.json', JSON.stringify(products), {encoding: "utf8"});
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