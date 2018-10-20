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
import { SubgrupoComponente } from '../models/Generales/subgrupocompenente';
import { Departamento } from '../models/Generales/departamento';
import { GrupoUnidad } from '../models/Generales/grupounidad';
import { Marca } from '../models/Generales/marca';
import { Unidad } from '../models/Generales/Unidad';
import { Almacen } from '../models/Inventarios/almacen';



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
    public SubGrupoComponentes: SubgrupoComponente[];
    public TipoConceptos: TipoConcepto[];
    public UsuarioRoles: UsuarioRol[];
    public Departamento: Departamento[];
    public GrupoUnidades: GrupoUnidad[];
    public Marcas: Marca[];
    public Unidades: Unidad[];
    public Almacen: Almacen[];

    /*******************************/
    public SourceOpcion: string[] = ['SI', 'NO'];
    public Opcion: any[];

    public SourceNaturaleza: string[] = ['ENTRADA', 'SALIDA'];
    public OpcionNaraleza: any[];

    public SourceEstatus: string[] = ['ACTIVO', 'INACTIVO'];
    public OpcionEstatus: any[];

    public SourceTipoAlmacen: string[] = ['PRINCIPAL', 'AUXILIAR'];
    public OpcionTipoAlmacen: any[];

    public SourceTipoSeguimiento: string[] = ['NORMAL', 'LOTES', 'NUMERO SERIE'];
    public OpcionTipoSeguimiento: any[];
    /*******************************/
    
    save(): any {
      if (this.FrmItem.status === 'INVALID') {
     
        return;
      }
      
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

    public searchDepartamento(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.Departamento = data;
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


    public searchSubGrupoComponenteXGrupo(event, _id , ws) {
      if ( _id === null || _id === undefined) {
        return null;
      }

      ws.searchxGrupo(event.query, _id).subscribe(data => {
        this.SubGrupoComponentes = data;
      });
    }

    public searchGrupoUnidadxUnidad(event, _id , ws) {
      if ( _id === null || _id === undefined) {
        return null;
      }

      ws.searchxTipoComponente('', _id).subscribe(data => {
        this.GrupoComponentes = data;
      });
    }


    public searchGrupoComponenteXTipoComponente(event, _id , ws) {
      if ( _id === null || _id === undefined) {
        return null;
      }

      ws.searchXUnidad(event.query, _id).subscribe(data => {
        this.Unidades = data;
      });
    }

    public searchTipoConcepto(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.TipoConceptos = data;
      });
    }

    public searchAlmacen(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.Almacen = data;
      });
    }

    public searchUsuarioRol(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.UsuarioRoles = data;
      });
    }

    public searchGrupoUnidad(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.GrupoUnidades = data;
        console.log(this.GrupoUnidades);
      });
    }

    public searchMarca(event, ws) {
      ws.search(event.query).subscribe(data => {
        this.Marcas = data;
      });
    }
   /***********************************/
   
   

    public searchOpciones(event) {
      this.Opcion = [];
      for (let i = 0; i < this.SourceOpcion.length; i++) {
          let item = this.SourceOpcion[i];
          if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.Opcion.push(item);
          }
      }
    }

    public sourceNaturaleza(event) {
      this.OpcionNaraleza = [];
      for (let i = 0; i < this.SourceNaturaleza.length; i++) {
          let item = this.SourceNaturaleza[i];
          if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.OpcionNaraleza.push(item);
          }
      }
    }

    public searchEstatus(event) {
      this.OpcionEstatus = [];
      for (let i = 0; i < this.SourceEstatus.length; i++) {
          let item = this.SourceEstatus[i];
          if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.OpcionEstatus.push(item);
          }
      }
    }

    public searchTipoAlmacen(event) {
      this.OpcionTipoAlmacen = [];
      for (let i = 0; i < this.SourceTipoAlmacen.length; i++) {
          let item = this.SourceTipoAlmacen[i];
          if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.OpcionTipoAlmacen.push(item);
          }
      }
    }

    public searchTipoSeguimiento(event) {
      this.OpcionTipoSeguimiento = [];
      for (let i = 0; i < this.SourceTipoSeguimiento.length; i++) {
          let item = this.SourceTipoSeguimiento[i];
          if (item.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
              this.OpcionTipoSeguimiento.push(item);
          }
      }
    }
/***********************************/

}

