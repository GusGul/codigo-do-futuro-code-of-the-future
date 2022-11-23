import { Country } from './../interfaces/Country';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  COUNTRIES = environment.REST_COUNTRIES;

  constructor(
    private http:HttpClient
  ) { }

  getTransacoes(page: Number) {
    return this.http.get<Country[]>(`${this.COUNTRIES}/all?fields=name,capital`, {
      params: {
        _page: String(page)
      }
    });
  }

}