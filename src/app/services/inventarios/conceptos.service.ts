import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { Concepto } from '../../models/Inventarios/concepto';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService extends BaseService<Concepto> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfConceptos.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<Concepto[]>('http://localhost:60493/Servicios/Inventarios/WcfConceptos.svc/');
   }

   save(item: any): any {
    return this.http.post<Concepto>('http://localhost:60493/Servicios/Inventarios/WcfConceptos.svc/', item);
 }
}

