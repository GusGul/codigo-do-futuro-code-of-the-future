import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = "erro";

  constructor() { }

  ngOnInit(): void {
  }

  @Output() exProduto = false;

  clicou(){
    this.exProduto = false;
  }

}
