import { TipoCliente } from './tipocliente';
import { ZonaCliente } from './Generales/zonacliente';
import { Moneda } from './Generales/moneda';
import { CondicionesDePago } from './condicionesdepago';
import { Vendedor } from './Generales/vendedor';
export class Cliente {
    _id: string;
    Nombre: string;
    RFC: string;
    RazonSocial: string;
    Pais;
    Contacto1: string;
    CondicionesDePago: CondicionesDePago;
    TipoCliente: TipoCliente;
    ZonaCliente: ZonaCliente;
    Moneda: Moneda;
    Vendedor: Vendedor;
    LimiteCredito: number;

    public constructor(init?: Partial<Cliente>) {
        Object.assign(this, init);
    }

}
