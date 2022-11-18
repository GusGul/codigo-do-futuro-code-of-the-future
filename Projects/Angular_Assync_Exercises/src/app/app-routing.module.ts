import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';
import { MainComponent } from './main/main.component';
import { PropertyEventComponent } from './property-event/property-event.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'property-binding', component: PropertyEventComponent },
  {path:'diretivas', component: ExercicioDiretivasComponent },
  {path:'pipes', component: ExercicioPipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
