export class TipoComponente {
    Nombre: string;
    public constructor(init?: Partial<TipoComponente>) {
        Object.assign(this, init);
    }
}
