import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { ServicesBase } from '../servicesBase';
import { Articulo } from '../../models/Inventarios/articulos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService extends BaseService<Articulo> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Inventarios/WcfArticulos.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<Articulo[]>('http://localhost:60493/Servicios/Inventarios/WcfArticulos.svc/');
   }

   save(item: any): any {
    return this.http.post<Articulo>('http://localhost:60493/Servicios/Inventarios/WcfArticulos.svc/', item);
   }
}
