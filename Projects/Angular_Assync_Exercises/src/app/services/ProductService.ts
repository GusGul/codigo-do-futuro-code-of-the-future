import { Product } from "../interfaces/Produto";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ProductService {

    API_FAKE = environment.API_FAKE;

    constructor(
        private http:HttpClient
    ) { }

    private static listOfProducts:Product[] = [];

    public async getProducts():Promise<Product[] | undefined> {
        let products:Product[] | undefined = await firstValueFrom(this.http.get<Product[]>(`${this.API_FAKE}/products`));
        return products
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