import { HttpClient } from '@angular/common/http';
import { ServicesBase } from '../services/servicesBase';
import { FormGroup } from '@angular/forms';
import { Moneda } from '../models/Generales/moneda';
import { Cobrador } from '../models/Generales/cobrador';
import { ZonaCliente } from '../models/Generales/zonacliente';
import { CondicionesDePago } from '../models/condicionesdepago';
import { Vendedor } from '../models/Generales/vendedor';
import { TipoCliente } from '../models/tipocliente';
import { TipoComponente } from '../models/Generales/tipocomponente';


export class FrmBase<Modelo>   {
    Ws: any;
    FrmItem: FormGroup;
    item: Modelo;
    /**Variable para controlar cargado de formulario****/
    public Cargando: boolean = false;
    /************************************************* */
    /***Combos****/
    public Monedas: Moneda[];
    public Vendedores: Vendedor[];
    public Cobradores: Cobrador[];
    public ZonasCliente: ZonaCliente[];
    public TiposCliente: TipoCliente[];
    public CondicionesDePago: CondicionesDePago[];
    public TiposComponentes: TipoComponente[];
    /********** */
    
    save(): any {
    console.log(this.item);
    
    this.Cargando = true;
    this.Ws.save(this.item).subscribe(data => {
          console.log('Guardado');
          console.log(data);
          this.Cargando = false;
          this.FrmItem.reset();
    });
    
    return null;
    }
    /*********Cargar combos*************/
    public searchMoneda(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.Monedas = data;
      });
    }
    
    public searchCondiciones(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.CondicionesDePago = data;
      });
    }
    
    public searchTipoCliente(event, ws) {
      ws.search(event.query).subscribe(data => {
      this.TiposCliente = data;
      });
    }
    
    public searchCobrador(event, ws) {
      ws.search(event.query).subscribe(data => {
      this.Cobradores = data;
      });
    }
    
    public searchVendedor(event, ws) {
      ws.search(event.query).subscribe(data => {
      this.Vendedores = data;
      });
    }
    
    
    public searchZonaCliente(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.ZonasCliente = data;
      });
    }

    public searchTipoComponente(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.TiposComponentes = data;
      });
    }
/******************************** */

}
