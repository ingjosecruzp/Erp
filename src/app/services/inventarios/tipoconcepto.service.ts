import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseService } from '../baseService';
import { TipoConcepto } from 'src/app/models/Inventarios/tipoconcepto';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoconceptoService extends BaseService<TipoConcepto> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfTipoConceptos.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<TipoConcepto[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfTipoConceptos.svc/');
   }

   save(item: any): any {
    return this.http.post<TipoConcepto>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfTipoConceptos.svc/', item);
 }
}
