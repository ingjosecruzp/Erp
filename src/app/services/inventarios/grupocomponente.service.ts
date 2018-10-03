import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { GrupoComponente } from '../../models/Generales/grupocomponente';

@Injectable({
  providedIn: 'root'
})
export class GrupocomponenteService implements ServicesBase {

  constructor(private http: HttpClient) {

   }

   getAll(): any {
    return this.http.get<GrupoComponente[]>('http://localhost:60493/Servicios/Inventarios/WcfGruposComponentes.svc/');
   }

   save(item: any): any {
    return this.http.post<GrupoComponente>('http://localhost:60493/Servicios/Inventarios/WcfGruposComponentes.svc/', item);
 }
}
