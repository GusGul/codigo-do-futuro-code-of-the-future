import { HttpClient } from '@angular/common/http';
import { ProductObserverService } from '../../../services/ProductObserver';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/produto';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:Router,
    private productObserverService:ProductObserverService
    ) { }

  ngOnInit(): void {
    this.productService = new ProductService(this.http)
    this.listaProducts()
  }

  private productService:ProductService = {} as ProductService
  public products:Product[] | undefined = []
  public quantity = this.productObserverService.quantity;

  private async listaProducts(){
    this.products = await this.productService.lista();
  }

  new(){
    this.router.navigateByUrl("/product");
  }

  edit(product:Product){
    this.router.navigateByUrl("/product/"+product.id);
  }

  async delete(product:Product){
    if(confirm("Confirma ?")){
      this.productService.excluirPorId(product.id);
      this.products = await this.productService.lista()
      this.productObserverService.updateQuantity();
    }
  }

}
