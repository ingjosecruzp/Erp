import { Concepto } from './concepto';
import { Almacen } from './almacen';

export class Salidas {
    _id: string;
    fecha: string;
    folio: string;
    Concepto: Concepto;
    Almacen: Almacen;
    descripcion: string;

    public constructor(init?: Partial<Salidas>) {
        Object.assign(this, init);
    }
}
