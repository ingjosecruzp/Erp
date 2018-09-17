import { Injectable } from '@angular/core';
import { Moneda } from '../../models/Generales/moneda';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedaService extends BaseService<Moneda> implements ServicesBase  {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfMoneda.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return null;
  }

 save(): any {
   console.log('save');
   return null;
 }

  delete(): any {
    return null;
  }
}
