import { environment } from './../../environments/environment';
import { Transacao } from './../interfaces/Transacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http:HttpClient
  ) { }

  getTransacoes() {
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`);
    return throwError(new Error("Erro genérico."));
  }
}
