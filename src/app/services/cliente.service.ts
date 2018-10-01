import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { ServicesBase } from '../services/servicesBase';


@Injectable({
  providedIn: 'root'
})
export class ClienteService implements ServicesBase {

  constructor(private http: HttpClient) {

  }

  getAll(): any {
    return this.http.get<Cliente[]>('http://localhost:60493/Servicios/Ventas/WcfClientes.svc/');
  }

  save(item: any): any {
     console.log(item);
     return this.http.post<Cliente>('http://localhost:60493/Servicios/Ventas/WcfClientes.svc/', item);
  }

  delete(): any {
    return null;
  }
}
