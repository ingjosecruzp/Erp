import { GrupoUnidadDetalle } from './grupounidaddetalle';
export class GrupoUnidad {
    _id: string;
    Nombre: string;
    GrupoUnidadDetalle: GrupoUnidadDetalle[];
    
    public constructor(init?: Partial<GrupoUnidad>) {
        Object.assign(this, init);
    }
}
