import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/ProductService';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductObserverService {

    constructor(private http:HttpClient) {
        this.updateQuantity()
    }

    public quantity:Number = 0

    async updateQuantity(){
        let lista = await new ProductService(this.http).lista();
        this.quantity = lista ? length : 0;
    }
}