import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';
import { TipoCliente } from '../../models/tipocliente';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService extends BaseService<TipoCliente> implements ServicesBase {

      constructor(private http: HttpClient) { 
        super(); 
        this.httpPeticion = http;
        this.Ws = 'Servicios/Generales/WcfTipoCliente.svc/';
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
