import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent {
  clienteIndex: number | null = null;
  nome: string = '';
  telefone: string = '';
  documento: string = '';
  cidade: string = '';
  endereco: string = '';
  clientes: any[] = [];

  constructor(private dadosService: DadosService) {
    this.clientes = this.dadosService.getClientes();
  }

  cadastrarCliente() {
    const cliente = { nome: this.nome, documento: this.documento, telefone: this.telefone, endereco: this.endereco, cidade: this.cidade };
    if (this.clienteIndex !== null) {
      this.dadosService.editarCliente(this.clienteIndex, cliente);
      alert('Cliente editado com sucesso!');
    } else {
      this.dadosService.adicionarCliente(cliente);
      alert('Cliente cadastrado com sucesso!');
    }
    this.resetarFormulario();
    this.clientes = this.dadosService.getClientes();
  }
  excluirCliente(index: number) {
    this.dadosService.excluirCliente(index);
    this.clientes = this.dadosService.getClientes();
    alert('Cliente excluído com sucesso!');
  }

  editarCliente(index: number) {
    const cliente = this.clientes[index];
    this.nome = cliente.nome;
    this.cidade = cliente.cidade;
    this.clienteIndex = index;
    this.documento = cliente.documento;
    this.endereco = cliente.endereco;
    this.telefone = cliente.telefone;
  }


  private resetarFormulario() {
    this.telefone = '';
    this.documento = '';
    this.nome = '';
    this.clienteIndex = null;
    this.cidade = '';
    this.endereco = '';
  }
}
