import { Injectable } from '@angular/core';
import { Peso } from '../../models/Inventarios/peso';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';
import { ServicesBase } from '../servicesBase';

@Injectable({
  providedIn: 'root'
})
export class PesoService extends BaseService<Peso> implements ServicesBase {

  constructor( private http: HttpClient ) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfPesos.svc';
    this.httpWs = http;
   }
   getAll(): any {
    return this.http.get<Peso[]>('http://localhost:60493/Servicios/Inventarios/WcfPesos.svc/');
   }

   save(item: any): any {
    return this.http.post<Peso>('http://localhost:60493/Servicios/Inventarios/WcfPesos.svc/', item);
 }
}
