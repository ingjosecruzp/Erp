export class Peso {
    _id: string;
    Nombre: string;
    
    public constructor(init?: Partial<Peso>) {
        Object.assign(this, init);
    }
}
