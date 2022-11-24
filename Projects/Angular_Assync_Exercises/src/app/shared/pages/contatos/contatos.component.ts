import { Contato } from './../../../interfaces/Contato';
import { ContatosService } from './../../../services/contatos.service';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos:Contato[] = [];
  loading!:Boolean;
  errorLoading!:Boolean;


  constructor(
    private contatosService:ContatosService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.loading = true;
    this.errorLoading = false;

    this.contatosService.getContatos()
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response:Contato[]) {
    this.contatos = response;
  }

  onError(error:any) {
    this.errorLoading = true;
    console.error(error);
  }

  irParaDetalhes(idContato:number) {
    this.router.navigate(['contatos/'+idContato])
  }

}
