import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { CondicionesDePago } from '../../models/condicionesdepago';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CondicionesdepagoService extends BaseService<CondicionesDePago> implements ServicesBase {

      constructor(private http: HttpClient) { 
        super();
        this.Ws = 'Servicios/Generales/WcfCondicionesDePago.svc';
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
