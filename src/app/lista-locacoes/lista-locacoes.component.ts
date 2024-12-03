import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-lista-locacoes',
  templateUrl: './lista-locacoes.component.html',
  styleUrls: ['./lista-locacoes.component.css']
})
export class ListaLocacoesComponent {
  locacoes: any[] = [];
  locacaoEditada: any = null;

  constructor(private dadosService: DadosService) {
    this.locacoes = this.dadosService.getLocacoes();
  }
  editarLocacao(index: number) {
    this.locacaoEditada = { ...this.locacoes[index], index: index };
  }

  excluirLocacao(index: number) {
    this.locacoes.splice(index, 1);
    alert('Locação excluída com sucesso!');
  }


  salvarEdicao() {
    if (this.locacaoEditada) {
      const index = this.locacaoEditada.index;
      this.locacoes[index] = {
        ...this.locacaoEditada, 
        index: undefined
      };
      this.locacaoEditada = null; 
      alert('Locação editada com sucesso!');
    }
  }
}
