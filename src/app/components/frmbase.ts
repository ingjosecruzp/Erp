import { HttpClient } from '@angular/common/http';
import { ServicesBase } from '../services/servicesBase';
import { FormGroup } from '@angular/forms';


export class FrmBase<Modelo>   {
    Ws: any;
    FrmItem: FormGroup;
    item: Modelo;
    /***Combos** */
    public Moneda: Moneda[];
    public Vendedor: Vendedor[];
    public Cobrador: Cobrador[];
    public ZonaCliente: ZonaCliente[];
    public TipoCliente: TipoCliente[];
    public CondicionesDePago: CondicionesDePago[];
    /********** */

    save(): any {
       console.log(this.item);
       
       this.Ws.save(this.item).subscribe(data => {
             console.log('Guardado');
             console.log(data);
             this.FrmItem.reset();
       });

       return null;
    }
    /*********Cargar combos*************/
    public searchMoneda(event) {
        this.WsMoneda.search(event.query).subscribe(data => {
          this.Moneda = data;
        });
    }
      
    public searchCondiciones(event) {
        this.WsCondicionesDePago.search(event.query).subscribe(data => {
          this.CondicionesDePago = data;
        });
   }

   public searchTipoCliente(event) {
    this.WsTipoCliente.search(event.query).subscribe(data => {
      this.TipoCliente = data;
    });
  }

  public searchCobrador(event) {
    this.WsCobrador.search(event.query).subscribe(data => {
      this.Cobrador = data;
    });
  }

  public searchVendedor(event) {
    this.WsVendedor.search(event.query).subscribe(data => {
      this.Vendedor = data;
    });
  }


   public searchZonaCliente(event) {
        this.WsZonaCliente.search(event.query).subscribe(data => {
          this.ZonaCliente = data;
        });
   }
   /******************************** */

}
