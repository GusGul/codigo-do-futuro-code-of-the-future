import { Product } from "../interfaces/produto";

export class ProductService {

    private static listOfProducts:any[] = [];

    public static list():any[] {
        return this.listOfProducts
    }

    public static add(product:Product):void {
        this.listOfProducts.push(product);
    }

}