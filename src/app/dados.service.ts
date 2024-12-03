import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private locacoes: any[] = [];
  private filmes: any[] = [];
  
  private clientes: any[] = [];
  constructor() { }

  adicionarCliente(cliente: any) {
    this.clientes.push(cliente);
  }

  getClientes() {
    return this.clientes;
  }

  excluirCliente(index: number) {
    if (index > -1 && index < this.clientes.length) {
      this.clientes.splice(index, 1); 
    }
  }

  
  adicionarLocacao(locacao: any) {
    this.locacoes.push(locacao);
  }
  
  adicionarFilme(filme: any) {
    this.filmes.push(filme);
  }


  editarCliente(index: number, cliente: any) {
    if (index > -1 && index < this.clientes.length) {
      this.clientes[index] = cliente; 
    }
  }
  
  getFilmes() {
    return this.filmes;
  }
  
  

  getLocacoes() {
    return this.locacoes;
  }
}
