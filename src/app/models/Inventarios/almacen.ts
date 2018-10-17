import { TipoComponente } from '../Generales/tipocomponente';
import { GrupoComponente } from '../Generales/grupocomponente';

export class Almacen {
    _id: string;
    Clave: string;
    Nombre: string;
    TipoAlmacen: string;
    Activo: string;
    TipoComponente: TipoComponente;
    GrupoComponente: GrupoComponente[];

    public constructor(init?: Partial<Almacen>) {
        Object.assign(this, init);
    }
    
}
