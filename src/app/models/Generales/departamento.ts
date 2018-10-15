export class Departamento {
    _id: string;
    Nombre: string;
    
    public constructor(init?: Partial<Departamento>) {
        Object.assign(this, init);
    }
}
