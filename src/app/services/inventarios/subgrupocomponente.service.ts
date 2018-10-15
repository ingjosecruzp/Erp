import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { SubgrupoComponente } from '../../models/Generales/subgrupocompenente';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class SubgrupocomponenteService  extends BaseService<SubgrupoComponente> implements ServicesBase {

 
  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfSubgruposComponentes.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<SubgrupoComponente[]>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/');
   }

   save(item: any): any {
    return this.http.post<SubgrupoComponente>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/', item);
  }

  searchxGrupo(busqueda: string, _id: string): any {
    const url = `http://localhost:60493/${this.Ws}/?searchBy=getXGrupo&busqueda=${busqueda}&_id=${_id}`;

    return this.httpWs.get<SubgrupoComponente[]>(url);
  }

}
