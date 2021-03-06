import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { Marca } from '../../models/Generales/Marca';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BaseService<Marca> {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfMarcas.svc';
    this.httpWs = http;
  }
  getAll(): any {
    return this.http.get<Marca[]>('http://localhost:60493/Servicios/Generales/WcfMarcas.svc/');
   }

   save(item: any): any {
    return this.http.post<Marca>('http://localhost:60493/Servicios/Generales/WcfMarcas.svc/', item);
 }
}
