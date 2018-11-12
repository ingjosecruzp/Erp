import { GrupoComponente } from '../Generales/grupocomponente';
import { SubgrupoComponente } from '../Generales/subgrupocompenente';
import { Unidad } from '../Generales/Unidad';
import { GrupoUnidad } from '../Generales/grupounidad';
import { Marca } from '../Generales/marca';
import { CodigosBarra } from './codigosbarra';
import { ConfiguracionesAlmacen } from './configuracionesalmacen';
import { Imagen } from './imagen';
export class Articulo {
    _id: string;
    Clave: string;
    NombreCorto: string;
    Nombre: string;
    GrupoComponente: GrupoComponente;
    SubgrupoComponente: SubgrupoComponente;
    GrupoUnidades: GrupoUnidad;
    Activo: string;
    // PathImg: string;
    Marca: Marca;
    Inventariable: string;
    TipoSeguimiento: string;
    CodigosBarras: CodigosBarra[];
    UnidadInventario: Unidad;
    UnidadVenta: Unidad;
    UnidadCompra: Unidad;
    Modelo: string;
    NoParte: string;
    ConfiguracionesAlmacen: ConfiguracionesAlmacen[];
    Imagen: Imagen[];

    public constructor(init?: Partial<Articulo>) {
        Object.assign(this, init);
    }
}
