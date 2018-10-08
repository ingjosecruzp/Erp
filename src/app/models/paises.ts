export class Paises {
    _id;
    Nombre;
    Abreviacion;

    public constructor(init?: Partial<Paises>) {
        Object.assign(this, init);
    }
}
