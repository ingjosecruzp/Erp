import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';
import { Entradas } from '../../models/Inventarios/entradas';


@Injectable({
  providedIn: 'root'
})
export class EntradasService extends BaseService<Entradas> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfSubgruposComponentes.svc';
    this.httpWs = http;
  }

  getAll() {
    return this.http.get<Entradas[]>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/');
  }
  save(item: any) {
    return this.http.post<Entradas>('http://localhost:60493/Servicios/Inventarios/WcfSubgruposComponentes.svc/', item);
  }

}

