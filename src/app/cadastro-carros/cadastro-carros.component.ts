import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroFilmesComponent {
  nome: string = '';
  marca: string = '';
  valor: number = 0;
  placa: string = '';
  ano: number = 0;

  constructor(private dadosService: DadosService) {}

  cadastrarFilme() {
    const filme = { nome: this.nome, marca: this.marca, placa: this.placa , valor: this.valor , ano: this.ano};
    this.valor = 0;
    this.nome = '';
    this.dadosService.adicionarFilme(filme);
    alert('O carro foi cadastrado com sucesso!');
    this.marca = '';
    this.placa = '';
  }
}
