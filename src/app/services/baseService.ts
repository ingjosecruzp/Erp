import { HttpClient } from '@angular/common/http';

export class BaseService<Modelo>   {
    Ws: string;
    httpWs: HttpClient;

    search(busqueda: string): any {
        const url = `http://localhost:60493/${this.Ws}/?searchBy=getXNombre&busqueda=${busqueda}`;

        return this.httpWs.get<Modelo[]>(url);
    }

    get(id: string): any {
        const url = `http://localhost:60493/${this.Ws}/${id}`;

        return this.httpWs.get<Modelo[]>(url);
    }

    update(item: Modelo, id: string): any {
        const url = `http://localhost:60493/${this.Ws}/${id}`;
        item._id=id;

        return this.httpWs.put<Modelo[]>(url, item);
    }
}
