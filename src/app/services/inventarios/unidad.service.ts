import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';
import { Unidad } from '../../models/Generales/Unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService extends BaseService<Unidad> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfUnidades.svc';
    this.httpWs = http;
   }

  getAll(): any {
    return this.http.get<Unidad[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfUnidades.svc/');
   }

   save(item: any): any {
    return this.http.post<Unidad>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfUnidades.svc/', item);
 }
}

