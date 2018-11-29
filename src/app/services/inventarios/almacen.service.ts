import { Injectable } from '@angular/core';
import { Almacen } from 'src/app/models/Inventarios/almacen';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService extends BaseService<Almacen> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfAlmacenes.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Almacen[]>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfAlmacenes.svc/');
   }

   save(item: any): any {
    return this.http.post<Almacen>('http://18.191.252.222/WcfErp/Servicios/Inventarios/WcfAlmacenes.svc/', item);
   }

   searchXTipoComponente(busqueda: string, _id: string): any {
    const url = `http://18.191.252.222/WcfErp/${this.Ws}/?searchBy=getXTipoComponente&busqueda=${busqueda}&_id=${_id}`;

    return this.httpWs.get<Almacen[]>(url);
   }

}
