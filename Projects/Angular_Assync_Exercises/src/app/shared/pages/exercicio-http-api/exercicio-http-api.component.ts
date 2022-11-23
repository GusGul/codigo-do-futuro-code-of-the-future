import { ExtratoService } from './../../../services/extrato.service';
import { Component, OnInit } from '@angular/core';
import { Transacao } from 'src/app/interfaces/Transacao';

@Component({
  selector: 'app-exercicio-http-api',
  templateUrl: './exercicio-http-api.component.html',
  styleUrls: ['./exercicio-http-api.component.css']
})
export class ExercicioHttpApiComponent implements OnInit {

  constructor(
    private extratoService:ExtratoService
  ) { }

  ngOnInit(): void {
    this.carregarExtrato();
  }

  transacoes:Transacao[] = [];
  loading!:Boolean;
  errorLoading!:Boolean;

  carregarExtrato() {
    this.loading = true;
    this.errorLoading = false;

    // se 'inscrevendo' na chamada da api, o observer dará o 'response' assim que a chamada retornar.
    this.extratoService.getTransacoes()
      .subscribe(response => {
        this.loading = false;
        this.errorLoading = false;
        this.transacoes = response;
      }, error => {
        this.loading = false;
        this.errorLoading = true;
      })
  }

}
