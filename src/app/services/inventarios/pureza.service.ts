import { Injectable } from '@angular/core';
import { Pureza } from '../../models/Generales/pureza';
import { ServicesBase } from '../servicesBase';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class PurezaService extends BaseService<Pureza> implements ServicesBase {

  constructor(private http: HttpClient) { 
    super();
    this.Ws = 'Servicios/Inventarios/WcfPureza.svc';
    this.httpWs = http;
  }

  getAll(): any {
    return this.http.get<Pureza[]>('http://localhost:60493/Servicios/Inventarios/WcfPureza.svc/');
  }
  save(item: any): any {
    const url = `http://localhost:60493/${this.Ws}/?searchBy=getXGrupo&busqueda=${busqueda}&_id=${_id}`;

    return this.httpWs.get<Pureza[]>(url);

  
}

