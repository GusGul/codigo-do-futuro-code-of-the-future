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
