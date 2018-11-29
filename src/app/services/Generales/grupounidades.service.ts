import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { GrupoUnidad } from '../../models/Generales/grupounidad';
import { HttpClient } from '@angular/common/http';
import { Unidad } from '../../models/Generales/Unidad';

@Injectable({
  providedIn: 'root'
})
export class GrupounidadesService extends BaseService<GrupoUnidad> {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfGrupoUnidades.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<GrupoUnidad[]>('http://18.191.252.222/WcfErp/Servicios/Generales/WcfGrupoUnidades.svc/');
   }

   save(item: any): any {
    return this.http.post<GrupoUnidad>('http://18.191.252.222/WcfErp/Servicios/Generales/WcfGrupoUnidades.svc/', item);
   }

   searchXUnidad(busqueda: string, _id: string): any {
    const url = `http://18.191.252.222/WcfErp/${this.Ws}/?searchBy=getXUnidad&busqueda=${busqueda}&_id=${_id}`;

    return this.httpWs.get<Unidad[]>(url);
   }
}
