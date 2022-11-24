# versão antiga sem API dos produtos, envio e tabela

## Product Service antigo, sem API:
import { Product } from "../interfaces/Produto";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductService {

    API_FAKE = environment.API_FAKE;

    constructor(
        private http:HttpClient
    ) { }

    private static listOfProducts:Product[] = [];

    public static async getProducts():Product[] {
        return await this.http.get<Product[]>(`${this.API_FAKE}/products`);
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

## produto HTML antigo sem API
<form class="centraliza">
    <h2 class="page-section-heading text-center text-uppercase text-light mb-0">{{title}}</h2>
    <div class="form-group">
      <label for="name">Product Name</label>
      <input type="text" class="form-control" id="inputName" name="name" [(ngModel)]="product.name" placeholder="Name here" required="">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="inputPrice" name="price" [(ngModel)]="product.price" placeholder="0.0">
    </div>
    <div class="form-group">
        <label for="desc">Description</label>
        <textarea class="form-control" id="inputDesc" name="description" [(ngModel)]="product.description" rows="3"></textarea>
    </div>

    <button type="button" class="btn btn-primary mb-2" (click)="add()" [disabled]="unfilled">{{ textoBotao }}</button>
</form>

## produto Components antigo sem API
import { ProductObserverService } from '../../../services/ProductObserver';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Produto';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-exercicio-produtos',
  templateUrl: './exercicio-produtos.component.html',
  styleUrls: ['./exercicio-produtos.component.css']
})
export class ExercicioProdutosComponent implements OnInit {

  constructor(
    private router:Router, 
    private routerParams: ActivatedRoute,
    private productObserverService:ProductObserverService
    ) {

  }
  
  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.textoBotao = "Update"
      this.title = "Updating product"
      this.product = ProductService.searchProductId(id)
      this.price = this.product.price.toString()
    }
  }

  public textoBotao:String = "Submit"
  public title:String = "New product"
  public product:Product = {} as Product
  public price:String = ""
  public description:String = ""

  public unfilled:Boolean = false

  public add(){
    if(this.product.id > 0){
      ProductService.updateProduct(this.product)
    }
    else{

      ProductService.setProduct({
        id: 0,
        name: this.product.name,
        price: this.product.price,
        description: this.product.description
      });
    }

    this.productObserverService.updateQuantity();
    this.router.navigateByUrl("/product-list");
  }

}

## tabela HTML antigo sem API
<div class="centraliza">
    <div *ngIf="products.length <= 0">
        <button class="btn btn-primary mb-3" (click)="new()">Add a New Product</button>
        <div class="alert alert-primary" role="alert">
            There's no products on the list!
        </div>
    </div>
    <div *ngIf="products.length > 0">
        <button class="btn btn-primary mb-3" (click)="new()">Add a New Product</button>
        <table class="table table-dark bg-primary">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let product of products">
                    <th>{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price.toString() | currency}}</td>
                    <td>{{ product.description }}</td>
                    <td><button type="button" class="btn btn-warning bg-warning" (click)="edit(product)">Update</button>
                    <button type="button" class="btn btn-danger bg-danger text-dark" (click)="delete(product)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

## tabela Components antigo sem API
import { ProductObserverService } from '../../../services/ProductObserver';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Produto';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  constructor(
    private router:Router,
    private productObserverService:ProductObserverService
    ) { }

  ngOnInit(): void {
  }

  public products:Product[] = ProductService.getProducts();

  new(){
    this.router.navigateByUrl("/product");
  }

  edit(product:Product){
    this.router.navigateByUrl("/product/"+product.id);
  }

  delete(product:Product){
    ProductService.deleteProduct(product);
    this.products = ProductService.getProducts()
    this.productObserverService.updateQuantity();
  }

}