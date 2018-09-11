import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesBase } from './servicesBase';
import { Paises } from '../models/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService implements ServicesBase {

  constructor(private http: HttpClient) {

   }

  getAll(): any {
    return this.http.get<Paises[]>('http://localhost:60493/Servicios/Generales/WcfPaises.svc/');
  }

  save(): any {
    return null;
  }
}
