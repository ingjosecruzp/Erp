import { Almacen } from './almacen';
export class ConfiguracionesAlmacen {
    Almacen: Almacen;
    Maximo: number;
    Reorden: number;
    Minimo: number;
    Localizacion: string;

    public constructor(init?: Partial<ConfiguracionesAlmacen>) {
        Object.assign(this, init);
    }
}
