import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { Puesto } from 'src/app/models/Generales/puesto';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuestoService extends BaseService<Puesto> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfPuestos.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Puesto[]>('http://18.191.252.222/WcfErp/Servicios/Generales/WcfPuestos.svc/');
   }

   save(item: any): any {
    return this.http.post<Puesto>('http://18.191.252.222/WcfErp/Servicios/Generales/WcfPuestos.svc/', item);
 }
}
