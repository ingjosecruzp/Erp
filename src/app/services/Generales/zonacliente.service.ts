import { Injectable } from '@angular/core';
import { ZonaCliente } from '../../models/Generales/zonacliente';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZonaclienteService extends BaseService<ZonaCliente> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfZonaCliente.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return null;
  }

 save(): any {
   console.log('save');
   return null;
 }

  delete(): any {
    return null;
  }
}
