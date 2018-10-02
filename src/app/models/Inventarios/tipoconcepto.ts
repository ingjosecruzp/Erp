export class TipoConcepto {
    _id: string;
    Nombre: string;

    public constructor(init?: Partial<TipoConcepto>) {
        Object.assign(this, init);
    }
}
