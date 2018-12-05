import { Injectable } from '@angular/core';
import { Peso } from '../../models/Inventarios/peso';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesoService extends BaseService<Peso> {

  constructor( private http: HttpClient ) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfPesos.svc';
    this.httpWs = http;
   }
   getAll(): any {
    return this.http.get<Peso[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfPesos.svc/');
   }

   save(item: any): any {
    return this.http.post<Peso>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfPesos.svc/', item);
 }
}
