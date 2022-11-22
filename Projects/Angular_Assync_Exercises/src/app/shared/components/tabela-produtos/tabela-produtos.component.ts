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

  constructor(private router:Router) { }

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
  }

}
