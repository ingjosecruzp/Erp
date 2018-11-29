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
    return this.http.get<SubgrupoComponente[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfSubgruposComponentes.svc/');
   }

   save(item: any): any {
    return this.http.post<SubgrupoComponente>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfSubgruposComponentes.svc/', item);
  }

  searchxGrupo(busqueda: string, _id: string): any {
    const url = `http://18.191.252.222/WcfErp/${this.Ws}/?searchBy=getXGrupo&busqueda=${busqueda}&_id=${_id}`;

    return this.httpWs.get<SubgrupoComponente[]>(url);
  }

}
