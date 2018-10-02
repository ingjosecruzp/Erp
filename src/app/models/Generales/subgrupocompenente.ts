import { GrupoComponente } from './grupocomponente';
export class SubgrupoComponente {
    _id: string;
    Nombre: string;
    GrupoComponente: GrupoComponente;

    public constructor(init?: Partial<SubgrupoComponente>) {
        Object.assign(this, init);
    }

}
