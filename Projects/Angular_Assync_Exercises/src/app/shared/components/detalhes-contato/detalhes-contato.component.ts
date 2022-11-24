import { ContatosService } from './../../../services/contatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs';
import { Contato } from 'src/app/interfaces/Contato';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.css']
})
export class DetalhesContatoComponent implements OnInit {

  contato: Contato = {} as Contato
  loading!: Boolean;
  errorLoading!: Boolean;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const idContato: number = this.route.snapshot.params['id'];
    if (idContato) {
      this.carregarContato(idContato);
    }
  }

  carregarContato(idContato: number) {
    this.loading = true;
    this.errorLoading = false;

    this.contatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Contato) {
    this.contato = response;
    console.log(this.contato);
  }

  onError(error: any) {
    this.errorLoading = true;
    console.error(error);
  }

  voltar() {
    this.router.navigate(['contatos']);
  }

}
