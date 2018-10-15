import { TipoComponente } from '../Generales/tipocomponente';

export class Almacen {
    _id: string;
    Clave: string;
    Nombre: string;
    TipoAlmacen: string;
    Activo: string;
    TipoComponente: TipoComponente;

    public constructor(init?: Partial<Almacen>) {
        Object.assign(this, init);
    }
    
}
