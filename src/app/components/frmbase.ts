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
import { GrupoComponente } from '../models/Generales/grupocomponente';
import { TipoConcepto } from '../models/Inventarios/tipoconcepto';
import { UsuarioRol } from 'src/app/models/administracion/usuariorol';


export class FrmBase<Modelo>   {
    _id: string;
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
    public GrupoComponentes: GrupoComponente[];
    public TipoConceptos: TipoConcepto[];
    public UsuarioRoles: UsuarioRol[];
    public SourceOpcion: string[] = ['SI', 'NO'];
    public Opcion: any[];
    /********** */
    
    save(): any {
    console.log(this.item);

    console.log(this.FrmItem);
    if(this.FrmItem.status === 'INVALID')
            return;
    
    this.Cargando = true;
   
    if (this._id === undefined || this._id === null) {
      this.Ws.save(this.item).subscribe(data => {
          console.log('Guardado');
          console.log(data);
          this.Cargando = false;
          this.FrmItem.reset();
      });
    } else {
      this.Ws.update(this.item, this._id).subscribe(data => {
        console.log('Modificado');
        console.log(data);
        this.Cargando = false;
        this.FrmItem.reset();
      });
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

    public searchGrupoComponente(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.GrupoComponentes = data;
      });
    }

    public searchTipoConcepto(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.TipoConceptos = data;
      });
    }

    public searchUsuarioRol(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.UsuarioRoles = data;
      });
    }
    public searchOpciones(event) {
      this.Opcion = [];
      for(let i = 0; i < this.SourceOpcion.length; i++) {
          let item = this.SourceOpcion[i];
          if(item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.Opcion.push(item);
          }
      }
  }
/******************************** */

}

