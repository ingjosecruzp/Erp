import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { Concepto } from '../../models/Inventarios/concepto';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService implements ServicesBase {

  constructor(private http: HttpClient) {

   }

   getAll(): any {
    return this.http.get<Concepto[]>('http://localhost:60493/Servicios/Inventarios/WcfConceptos.svc/');
   }

   save(item: any): any {
    return this.http.post<Concepto>('http://localhost:60493/Servicios/Inventarios/WcfConceptos.svc/', item);
 }
}
