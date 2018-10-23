import { Concepto } from './concepto';
import { Almacen } from './almacen';

export class Entradas {
    _id: string;
    fecha: string;
    folio: string;
    Concepto: Concepto;
    Almacen: Almacen;
    descripcion: string;

    public constructor(init?: Partial<Entradas>) {
        Object.assign(this, init);
    }
}
