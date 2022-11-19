import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PropertyEventComponent } from './shared/components/property-event/property-event.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ExercicioFormComponent } from './shared/components/exercicio-form/exercicio-form.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyEventComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    MainComponent,
    ExercicioFormComponent
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
