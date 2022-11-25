import { LoginComponent } from './shared/pages/login/login.component';
import { DetalhesContatoComponent } from './shared/components/detalhes-contato/detalhes-contato.component';
import { ContatosComponent } from './shared/pages/contatos/contatos.component';
import { ExCountriesComponent } from './shared/pages/ex-countries/ex-countries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioDiretivasComponent } from './shared/pages/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/pages/exercicio-pipes/exercicio-pipes.component';
import { MainComponent } from './shared/components/main/main.component';
import { ExercicioProdutosComponent } from './shared/pages/exercicio-produtos/exercicio-produtos.component';
import { TabelaProdutosComponent } from './shared/pages/tabela-produtos/tabela-produtos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyEventComponent } from './shared/pages/property-event/property-event.component';
import { ExercicioHttpApiComponent } from './shared/pages/exercicio-http-api/exercicio-http-api.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'property-binding', component: PropertyEventComponent },
  {path:'diretivas', component: ExercicioDiretivasComponent },
  {path:'pipes', component: ExercicioPipesComponent },
  {path:'product', component: ExercicioProdutosComponent},
  {path:'product/:id', component: ExercicioProdutosComponent},
  {path:'product-list', component: TabelaProdutosComponent},
  {path:'http-api', component: ExercicioHttpApiComponent},
  {path:'contatos', component: ContatosComponent},
  {path:'contatos/:id', component: DetalhesContatoComponent},
  {path:'countries', component: ExCountriesComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
