import { Injectable } from '@angular/core';
import { Cobrador } from '../../models/Generales/cobrador';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CobradorService extends BaseService<Cobrador> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfCobrador.svc';
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
