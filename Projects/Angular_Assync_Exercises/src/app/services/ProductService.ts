import { Product } from "../interfaces/produto";

export class ProductService {

    private static listOfProducts:Product[] = [];

    public static getProducts():Product[] {
        return this.listOfProducts
    }

    public static setProduct(product:Product):void {
        product.id = ProductService.getProducts().length + 1
        ProductService.listOfProducts.push(product);
    }

    public static updateProduct(product:Product):void {
        for(let i=0; i<ProductService.listOfProducts.length; i++) {
            let productDb = ProductService.listOfProducts[i]
            if(productDb.id == product.id){
                productDb = {
                    ...product
                }
                break
            }
        }
    }

    public static deleteProduct(product:Product):void {
        let newList = []
        for(let i=0; i<ProductService.listOfProducts.length; i++) {
            let productDb = ProductService.listOfProducts[i]
            if(productDb.id != product.id){
                newList.push(productDb)
            }
        }
        ProductService.listOfProducts = newList
    }

    static searchProductId(id: Number):Product {
        let product:Product = {} as Product

        for(let i=0; i<ProductService.listOfProducts.length; i++){
            let productDb = ProductService.listOfProducts[i]
            if(productDb.id == id){
                product = productDb
                break
            }
        }

        return product;
    }

}