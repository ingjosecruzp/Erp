import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { Unidad } from '../../models/Generales/Unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService implements ServicesBase {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get<Unidad[]>('http://localhost:60493/Servicios/Inventarios/WcfUnidades.svc/');
   }

   save(item: any): any {
    return this.http.post<Unidad>('http://localhost:60493/Servicios/Inventarios/WcfUnidades.svc/', item);
 }
}
