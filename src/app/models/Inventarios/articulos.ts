import { GrupoComponente } from '../Generales/grupocomponente';
import { SubgrupoComponente } from '../Generales/subgrupocompenente';
import { Unidad } from '../Generales/Unidad';
export class Articulo {
    _id: string;
    NombreCorto: string;
    Nombre: string;
    GrupoComponente: GrupoComponente;
    SubgrupoComponente: SubgrupoComponente;
    // GrupoUnidades
    Activo: string;
    PathImg: string;
    // Marca
    Inventariable: string;
    TipoSeguimiento: string;
    // CodigosBarras
    UnidadInventario: Unidad;
    UnidadVenta: Unidad;
    UnidadCompra: Unidad;

    public constructor(init?: Partial<Articulo>) {
        Object.assign(this, init);
    }
}