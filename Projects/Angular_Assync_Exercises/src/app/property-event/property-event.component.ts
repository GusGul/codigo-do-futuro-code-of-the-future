import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-event',
  templateUrl: './property-event.component.html',
  styleUrls: ['./property-event.component.css']
})
export class PropertyEventComponent implements OnInit {

  interpolationTest: String = "sou uma interpolação";
  cursoAngular: boolean = true;
  urlImagem = "favicon.ico";

  initValor: number = 0;

  getCursoAngular(){
    return true;
  }
  getValor(){
    return 1;
  }

  increment(){
    this.initValor++;
  }
  decrement(){
    this.initValor--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
