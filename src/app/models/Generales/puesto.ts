import { Departamento } from './departamento';

export class Puesto {
    _id: string;
    Nombre: string;
    Departamento: Departamento;

    public constructor(init?: Partial<Puesto>) {
        Object.assign(this, init);
    }

}
