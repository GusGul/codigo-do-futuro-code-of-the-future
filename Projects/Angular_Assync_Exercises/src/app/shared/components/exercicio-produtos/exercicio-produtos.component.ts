import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/produto';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-exercicio-produtos',
  templateUrl: './exercicio-produtos.component.html',
  styleUrls: ['./exercicio-produtos.component.css']
})
export class ExercicioProdutosComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.products = ProductService.list();
  }

  public products:Product[] = [];
  public product:Product = {} as Product

  public add(){
    ProductService.add(this.product);
  }

}
