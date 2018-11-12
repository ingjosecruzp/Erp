import { Unidad } from '../Generales/Unidad';

export class CodigosBarra {
    Unidad: Unidad;
    Codigo: string;
    Activo: string;

    public constructor(init?: Partial<CodigosBarra>) {
        Object.assign(this, init);
    }
}
