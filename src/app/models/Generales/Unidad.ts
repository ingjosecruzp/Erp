export class Unidad {
    _id: string;
    Nombre: string;
    Abreviatura: string;
    public constructor(init?: Partial<Unidad>) {
        Object.assign(this, init);
    }
}
