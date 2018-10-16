import { Unidad } from './Unidad';

export class GrupoUnidadDetalle {
    CantidadEquivalente: number;
    UnidadEquivalente: Unidad;
    CantidadBase: number;
    UnidadBase: Unidad;
    
    public constructor(init?: Partial<GrupoUnidadDetalle>) {
        Object.assign(this, init);
    }
}
