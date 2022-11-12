import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient){ }

  //GET
  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("http://localhost:3000/cliente");
  }
//POST
  inserir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:3000/cliente", cliente);

  }

}