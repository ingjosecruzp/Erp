import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';
import { ServicesBase } from '../servicesBase';
import { Usuario } from '../../models/Administracion/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<Usuario> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Administracion/WcfUsuarios.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Usuario[]>('http://18.191.252.222/WcfErp/Servicios/Administracion/WcfUsuarios.svc/');
   }

   save(item: any): any {
    return this.http.post<Usuario>('http://18.191.252.222/WcfErp/Servicios/Administracion/WcfUsuarios.svc/', item);
 }

}
