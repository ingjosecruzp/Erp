import { UsuarioRol } from './usuariorol';

export class Usuario {
    _id: string;
    Nombre: string;
    NombreUsuario: string;
    Contraseña: string;
    rol: UsuarioRol;
    EstatusUsuario: string;

    public constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
