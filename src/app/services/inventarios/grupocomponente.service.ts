import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { GrupoComponente } from '../../models/Generales/grupocomponente';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class GrupocomponenteService extends BaseService<GrupoComponente> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfGruposComponentes.svc';
    this.httpWs = http;
  }


   getAll(): any {
    return this.http.get<GrupoComponente[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfGruposComponentes.svc/');
   }

   save(item: any): any {
    return this.http.post<GrupoComponente>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfGruposComponentes.svc/', item);
 }

  
    searchxTipoComponente(busqueda: string, _id: string): any {
      const url = `http://18.191.252.222/WcfErp/${this.Ws}/?searchBy=getXTipoComponente&busqueda=${busqueda}&_id=${_id}`;

      return this.httpWs.get<GrupoComponente[]>(url);
    }

    
}
