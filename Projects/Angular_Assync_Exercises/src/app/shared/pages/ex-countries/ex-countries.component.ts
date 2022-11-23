import { CountriesService } from './../../../services/countries.service';
import { Country } from './../../../interfaces/Country';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs';
import { ExtratoService } from 'src/app/services/extrato.service';

@Component({
  selector: 'app-ex-countries',
  templateUrl: './ex-countries.component.html',
  styleUrls: ['./ex-countries.component.css']
})
export class ExCountriesComponent implements OnInit {
 
  constructor(
    private countriesService:CountriesService
  ) { }

  ngOnInit(): void {
    this.carregarPais();
  }

  countries:Country[] = [];
  page:number = 1;
  loading!:Boolean;
  errorLoading!:Boolean;

  carregarPais() {
    this.loading = true;
    this.errorLoading = false;

    // se 'inscrevendo' na chamada da api, o observer dará o 'response' assim que a chamada retornar.
    this.countriesService.getTransacoes(this.page)
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
        finalize(() => this.loading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response:Country[]){
    //this.loading = false; agora está sendo tratado pela função "finalize"
    this.errorLoading = false;
    this.countries = response;
  }

  onError(error:any){
    //this.loading = false; agora está sendo tratado pela função "finalize"
    this.errorLoading = true;
    console.log(error);
  }

  lastPage(){
    this.page = this.page - 1;
    this.carregarPais();
  }

  nextPage(){
    this.page = this.page + 1;
    this.carregarPais();
  }

}
