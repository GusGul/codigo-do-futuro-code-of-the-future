import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
[x: string]: any;

  constructor() { }

  public cliente:Cliente = {} as Cliente
  
  public clientes:Cliente[] = [
    { id: 1, nome: "Gustavo", sobrenome: "Salgado Lima", email: "gustavo@email.com", telefone: 11999999999, valor: 100 }
  ]
  
  ngOnInit(): void {
    
  }

  adicionar() {
    let id = this.clientes.length + 1;
    let novoCliente:Cliente = {
      id: id,
      nome: this.cliente.nome,
      sobrenome: this.cliente.sobrenome,
      email: this.cliente.email,
      telefone: this.cliente.telefone,
      valor: this.cliente.valor
    }
    this.clientes.push(novoCliente);
  }

}
