export class Marca {
    _id: string;
    Nombre: string;
    
    public constructor(init?: Partial<Marca>) {
        Object.assign(this, init);
    }
}
