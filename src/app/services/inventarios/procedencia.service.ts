import { Injectable } from '@angular/core';
import { Procedencia } from '../../models/Inventarios/procedencia';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';
import { ServicesBase } from '../servicesBase';

@Injectable({
  providedIn: 'root'
})
export class ProcedenciaService extends BaseService<Procedencia> implements ServicesBase {

  constructor( private http: HttpClient ) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfProcedencias.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<Procedencia[]>('http://localhost:60493/Servicios/Inventarios/WcfProcedencias.svc/');
   }

   save(item: any): any {
    return this.http.post<Procedencia>('http://localhost:60493/Servicios/Inventarios/WcfProcedencias.svc/', item);
 }

}
