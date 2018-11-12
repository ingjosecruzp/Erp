import { Concepto } from './concepto';
import { Almacen } from './almacen';

export class Imagen {
    Source: string;

    public constructor(init?: Partial<Imagen>) {
        Object.assign(this, init);
    }
}
