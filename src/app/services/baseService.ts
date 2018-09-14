import { ServicesBase } from './servicesBase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService<Modelo> implements ServicesBase   {
    public Ws: string;

    constructor(private http: HttpClient) {
      
    }

    getAll(): any {
        return null;
      }

     save(): any {
       return null;
     }

    search(busqueda: string): any {
        console.log(this.Ws);
        // const url = `http://localhost:60493/Servicios/Generales/WcfCondicionesDePago.svc/?searchBy=getXNombre&busqueda=${busqueda}`;
        //const url = `http://localhost:60493/${this.Ws}/?searchBy=getXNombre&busqueda=${busqueda}`;

        //return this.http.get<Modelo[]>(url);
        return null;
    }
}