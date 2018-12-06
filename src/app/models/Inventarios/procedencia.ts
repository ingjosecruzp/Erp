export class Procedencia {
    _id: string;
    Nombre: string;
    
    public constructor(init?: Partial<Procedencia>) {
        Object.assign(this, init);
    }
}
