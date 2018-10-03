import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { SubgrupoComponente } from '../../models/Generales/subgrupocompenente';

@Injectable({
  providedIn: 'root'
})
export class SubgrupocomponenteService implements ServicesBase{

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get<SubgrupoComponente[]>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/');
   }

   save(item: any): any {
    return this.http.post<SubgrupoComponente>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/', item);
 }

}
