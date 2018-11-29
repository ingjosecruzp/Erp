import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/cliente';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';


@Injectable({
  providedIn: 'root'
})
export class ClienteService  extends BaseService<Cliente> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Ventas/WcfClientes.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Cliente[]>('http://18.191.252.222/WcfErp/Servicios/Ventas/WcfClientes.svc/');
  }

  save(item: any): any {
     console.log(item);
     return this.http.post<Cliente>('http://18.191.252.222/WcfErp/Servicios/Ventas/WcfClientes.svc/', item);
  }

  delete(): any {
    return null;
  }
}
