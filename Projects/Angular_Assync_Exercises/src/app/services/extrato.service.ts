import { environment } from './../../environments/environment';
import { Transacao } from './../interfaces/Transacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, timer, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http:HttpClient
  ) { }

  getTransacoes(page: Number) {
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      params: {
        _page: String(page)
      }
    });

    //simular erro após 3 segundos
    const erro = throwError("Erro genérico.")
    return timer(3000)
    .pipe(
      mergeMap(() => erro)
    )
  }
}
