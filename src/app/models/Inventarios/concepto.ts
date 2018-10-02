import { TipoConcepto } from './tipoconcepto';
export class Concepto {
    _id: string;
    Clave: string;
    FolioAutomatico: string;
    Nombre: string;
    Naturaleza: string;
    TipoConcepto: TipoConcepto;
    Predefinido: string;
    CostoAutomatico: string;

    public constructor(init?: Partial<Concepto>) {
        Object.assign(this, init);
    }
}
