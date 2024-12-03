import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroFilmesComponent } from './cadastrodecarros/cadastro-carros.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { ListaLocacoesComponent } from './lista-locacoes/lista-locacoes.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    CadastroFilmesComponent,
    LocacaoComponent,
    ListaLocacoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
