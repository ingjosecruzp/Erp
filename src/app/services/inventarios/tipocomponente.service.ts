import { Injectable } from '@angular/core';
import { TipoComponente } from '../../models/Generales/tipocomponente';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TipocomponenteService extends BaseService<TipoComponente> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfTipoComponente.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<TipoComponente[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfTipoComponente.svc/');
   }

   save(item: any): any {
    return this.http.post<TipoComponente>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfTipoComponente.svc/', item);
 }
    
}
