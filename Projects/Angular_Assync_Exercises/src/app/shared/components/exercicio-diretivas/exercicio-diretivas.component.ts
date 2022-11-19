import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas-constantes';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'

  deveSerVerde = false;

  tornarVerde(){
    if(!this.deveSerVerde){
      this.deveSerVerde = true;
    } else {
      this.deveSerVerde = false;
    }
  }

}
