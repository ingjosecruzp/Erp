import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesBase } from './servicesBase';
import { Paises } from '../models/paises';
import { BaseService } from './baseService';


@Injectable({
  providedIn: 'root'
})
export class PaisesService extends BaseService<Paises> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Generales/WcfPaises.svc';
    this.httpWs = http;
   }

  getAll(): any {
    return this.http.get<Paises[]>('http://localhost:60493/Servicios/Generales/WcfPaises.svc/');
  }

  save(item: any): any {
    return this.http.post<Paises>('http://localhost:60493/Servicios/Generales/WcfPaises.svc/', item);
  }
}

