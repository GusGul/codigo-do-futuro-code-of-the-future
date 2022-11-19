import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-property-event',
  templateUrl: './property-event.component.html',
  styleUrls: ['./property-event.component.css']
})
export class PropertyEventComponent implements OnInit {

  interpolationTest: String = "sou uma interpolação";
  cursoAngular: boolean = true;
  urlImagem = "favicon.ico";

  @Input() initValor = 0;
  @Output() valorMudou = new EventEmitter();

  getCursoAngular(){
    return true;
  }
  getValor(){
    return 1;
  }

  increment(){
    this.initValor++;
    this.valorMudou.emit(this.initValor);
  }
  decrement(){
    this.initValor--;
    this.valorMudou.emit(this.initValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
