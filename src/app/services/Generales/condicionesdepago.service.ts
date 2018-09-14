import { Injectable } from '@angular/core';
import { ServicesBase } from '../servicesBase';
import { CondicionesDePago } from '../../models/condicionesdepago';
import { BaseService } from '../baseService';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CondicionesdepagoService extends BaseService<CondicionesDePago> implements ServicesBase {
      Ws: string;
      
      constructor(http: HttpClient) { 
   
        super(http);
        this.Ws = 'test';
      }

      getAll(): any {
        return null;
      }

     save(): any {
       return null;
     }

      delete(): any {
        return null;
      }
}
