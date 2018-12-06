import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesBase } from '../servicesBase';
import { BaseService } from '../baseService';
import { UsuarioRol } from '../../models/administracion/usuariorol';

@Injectable({
  providedIn: 'root'
})
export class UsuariorolService extends BaseService<UsuarioRol> implements ServicesBase {

  constructor(private http: HttpClient) {
    super();
    this.Ws = 'Servicios/Administracion/WcfUsuariosRoles.svc';
    this.httpWs = http;
   }

   getAll(): any {
    return this.http.get<UsuarioRol[]>('http://localhost:60493/Servicios/Administracion/WcfUsuariosRoles.svc/');
   }

   save(item: any): any {
    return this.http.post<UsuarioRol>('http://localhost:60493/Servicios/Administracion/WcfUsuariosRoles.svc/', item);
  }

}
