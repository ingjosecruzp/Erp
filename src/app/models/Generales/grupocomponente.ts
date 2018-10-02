import { TipoComponente } from './tipocomponente';
export class GrupoComponente {
    Nombre: string;
    TipoComponente: TipoComponente;
    public constructor(init?: Partial<GrupoComponente>) {
        Object.assign(this, init);
    }
}
