import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroFilmesComponent } from './cadastrodecarros/cadastro-carros.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { ListaLocacoesComponent } from './lista-locacoes/lista-locacoes.component';

const routes: Routes = [
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-filmes', component: CadastroFilmesComponent },
  { path: 'locacao', component: LocacaoComponent },
  { path: 'lista-locacoes', component: ListaLocacoesComponent },
  { path: '', redirectTo: '/cadastro-clientes', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/cadastro-clientes' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
