import { GrupoComponente } from './grupocomponente';
export class Pureza {
    _id: string;
    Nombre: string;
    GrupoComponente: GrupoComponente;

    public constructor(init?: Partial<Pureza>) {
        Object.assign(this, init);
    }

}
