import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import { MainComponent } from './main/main.component';
import { PropertyEventComponent } from './shared/components/property-event/property-event.component';
import { ExercicioProdutosComponent } from './shared/components/exercicio-produtos/exercicio-produtos.component';
import { TabelaProdutosComponent } from './shared/components/tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'property-binding', component: PropertyEventComponent },
  {path:'diretivas', component: ExercicioDiretivasComponent },
  {path:'pipes', component: ExercicioPipesComponent },
  {path:'product', component: ExercicioProdutosComponent},
  {path:'product/:id', component: ExercicioProdutosComponent},
  {path:'product-list', component: TabelaProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
