import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { Departamento } from '../../models/Generales/Departamento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService extends BaseService<Departamento> {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfDepartamentos.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Departamento[]>('http://localhost:60493/Servicios/Generales/WcfDepartamentos.svc/');
   }

   save(item: any): any {
    return this.http.post<Departamento>('http://localhost:60493/Servicios/Generales/WcfDepartamentos.svc/', item);
 }
}
