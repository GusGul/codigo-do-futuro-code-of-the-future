import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css']
})
export class ExercicioPipesComponent {

  filme = {
    nome: 'Harry Potter - A Pedra Filosofal',
    estrelas: 4.799999,
    precoAluguel: 19.90,
    dataLancamento: new Date(2014, 10, 24)
  }

}
