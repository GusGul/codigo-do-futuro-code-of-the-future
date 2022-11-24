import { HttpClient } from '@angular/common/http';
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
    private productObserverService:ProductObserverService,
    private http:HttpClient
    ) {

  }

  private productService = {} as ProductService
  public textoBotao:String = "Submit"
  public title:String = "New product"
  public product:Product | undefined = {} as Product
  public price:any = ""
  public description:String = ""

  public unfilled:Boolean = false

  ngOnInit(): void {
    this.productService = new ProductService(this.http)
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.editaCliente(id)
    }
  }

  private async editaCliente(id: Number) {
    this.title = "Update product"
    this.product = await this.productService.buscaPorId(id)
    this.price = this.product?.price.toString()
  }

  public add(){
    if(this.price && this.product && this.product.id > 0){
      this.productService.update(this.product)
    }
    else{
      this.productService.criar({
        id: 0,
        name: this.product?.name,
        price: this.product?.price,
        description: this.product?.description
      });
    }

    this.productObserverService.updateQuantity();
    this.router.navigateByUrl("/product-list");
  }

}
