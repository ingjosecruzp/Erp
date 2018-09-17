import { Injectable } from '@angular/core';
import { Vendedor } from '../../models/Generales/vendedor';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendedorService extends BaseService<Vendedor> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Generales/WcfVendedor.svc';
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
