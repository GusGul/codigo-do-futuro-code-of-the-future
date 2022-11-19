import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDisabled = true;

  @Input() title = "Cabeçalho";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }

}
