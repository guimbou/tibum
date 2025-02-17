import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  criar(cliente: Cliente) {
    this.http.post('https://tibum-cf721-default-rtdb.firebaseio.com/clientes.json', cliente).subscribe();
  }

  lerTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://tibum-cf721-default-rtdb.firebaseio.com/clientes.json');
  }

  editar(id: string, cliente: Cliente){

  }

  excluir(id: string){

  }
}
