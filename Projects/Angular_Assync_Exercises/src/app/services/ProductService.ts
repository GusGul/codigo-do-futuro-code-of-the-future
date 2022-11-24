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

    public async lista(): Promise<Product[] | undefined> {
        let products:Product[] | undefined = await firstValueFrom(this.http.get<Product[]>(`${environment.API_FAKE}/products`))
        return products;
    }

    public async criar(product:Product): Promise<Product | undefined> {
        let productRest:Product | undefined = await firstValueFrom(this.http.post<Product>(`${environment.API_FAKE}/products/`, product))
        return productRest;
    }

    public async update(product:Product): Promise<Product | undefined> {
        let productRest:Product | undefined = await firstValueFrom(this.http.put<Product>(`${environment.API_FAKE}/products/${product.id}`, product))
        return productRest;
    }

    public async buscaPorId(id:Number): Promise<Product | undefined> {
        return await firstValueFrom(this.http.get<Product | undefined>(`${environment.API_FAKE}/products/${id}`))
    }

    public excluirPorId(id:Number) {
        firstValueFrom(this.http.delete(`${environment.API_FAKE}/products/${id}`))
    }

}