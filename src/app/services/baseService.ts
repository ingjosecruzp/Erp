import { HttpClient } from '@angular/common/http';

export class BaseService<Modelo>   {
    Ws: string;
    httpWs: HttpClient;

    search(busqueda: string): any {
        const url = `http://localhost:60493/${this.Ws}/?searchBy=getXNombre&busqueda=${busqueda}`;

        return this.httpWs.get<Modelo[]>(url);
    }
}