export class TipoComponente {
    _id: string;
    Nombre: string;
    public constructor(init?: Partial<TipoComponente>) {
        Object.assign(this, init);
    }
}
