import { ProductService } from 'src/app/services/ProductService';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductObserverService {

    constructor() {
        this.updateQuantity()
    }

    public quantity:Number = 0

    updateQuantity(){
        this.quantity = ProductService.getProducts().length
    }
}