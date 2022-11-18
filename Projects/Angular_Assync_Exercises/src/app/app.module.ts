import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertyEventComponent } from './property-event/property-event.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MainComponent } from './main/main.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyEventComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
