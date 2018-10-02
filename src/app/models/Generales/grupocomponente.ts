import { TipoComponente } from './tipocomponente';
export class GrupoComponente {
    _id: string;
    Nombre: string;
    TipoComponente: TipoComponente;
    public constructor(init?: Partial<GrupoComponente>) {
        Object.assign(this, init);
    }
}
