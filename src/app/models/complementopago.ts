import { Cliente } from './cliente';
import { DetalleComplementoPago } from './detallecomplementopago';
export class ComplementoPago {
    _id;
    Cliente: Cliente;
    Serie: String;
    Folio: String;
    FechaPago: Date;
    FormaPago: string;
    NumeroOperacion: string;
    TotalPago: number;
    Moneda: String;
    Detalles: Array<DetalleComplementoPago>;
}
