export class UsuarioRol {
    _id: string;
    Nombre: string;
    public constructor(init?: Partial<UsuarioRol>) {
        Object.assign(this, init);
    }
}
