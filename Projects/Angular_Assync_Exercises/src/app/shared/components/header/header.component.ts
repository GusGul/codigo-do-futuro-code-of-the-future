import { LogadoService } from './../../../services/logado.service';
import { ActivatedRoute } from '@angular/router';
import { ProductObserverService } from './../../../services/ProductObserver';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    public productObserverService:ProductObserverService,
    public logadoService:LogadoService
  ) {
    // Sempre que mudar de rota, deve atualizar também
    route.params.subscribe(val => {
      this.productObserverService.updateQuantity()
    })
  }

  ngOnInit(): void {
  }
  
}
