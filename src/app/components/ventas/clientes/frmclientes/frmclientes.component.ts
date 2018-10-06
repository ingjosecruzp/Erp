import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { TipoclienteService } from '../../../../services/Generales/tipocliente.service';
import { MonedaService } from '../../../../services/Generales/moneda.service';
import { VendedorService } from '../../../../services/Generales/vendedor.service';
import { CobradorService } from '../../../../services/Generales/cobrador.service';
import { ZonaclienteService } from '../../../../services/Generales/zonacliente.service';
import { CondicionesdepagoService } from '../../../../services/Generales/condicionesdepago.service';
import { ClienteService } from '../../../../services/ventas/cliente.service';
import { Moneda } from '../../../../models/Generales/moneda';
import { Vendedor } from '../../../../models/Generales/vendedor';
import { Cobrador } from '../../../../models/Generales/cobrador';
import { ZonaCliente } from '../../../../models/Generales/zonacliente';
import { CondicionesDePago } from '../../../../models/condicionesdepago';
import { Cliente } from '../../../../models/cliente';
import { TipoCliente } from '../../../../models/tipocliente';

import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';



@Component({
  selector: 'app-frmclientes',
  templateUrl: './frmclientes.component.html',
  styleUrls: []
})
export class FrmclientesComponent implements OnInit {
  FrmDocumento: FormGroup;
  clientes: Cliente[] = [];
  cols: any[];
  selectedCliente: Cliente;
  displayDialog: boolean;
  CondicionesDePago: CondicionesDePago[];
  TipoCliente: TipoCliente[];
  Moneda: Moneda[];
  Vendedor: Vendedor[];
  Cobrador: Cobrador[];
  ZonaCliente: ZonaCliente[];

  constructor(private WsClientes: ClienteService, private WsCondicionesDePago: CondicionesdepagoService,
    private WsTipoCliente: TipoclienteService, private fb: FormBuilder, private WsMoneda: MonedaService,
    private WsVendedor: VendedorService, private WsCobrador: CobradorService, 
    private WsZonaCliente: ZonaclienteService, public config: DialogConfig, public dialog: DialogRef) {
      this.displayDialog = true;
      if (config.data._id !== undefined) {
        this.WsClientes.get(config.data._id).subscribe(data => {
           console.log(data);
        });
      }
  }

  ngOnInit() {
    this.FrmDocumento = this.fb.group({
      Nombre: ['', [Validators.required]],
      Rfc: ['', [Validators.required]],
      Contacto1: ['', [Validators.required]],
      Contacto2: ['', [Validators.required]],
      CondicionesDePago: ['', [Validators.required]],
      TipoCliente: ['', [Validators.required]],
      LimiteCredito: ['', [Validators.required]],
      ZonaCliente: ['', [Validators.required]],
      Moneda: ['', [Validators.required]],
      Cobrador: ['', [Validators.required]],
      Vendedor: ['', [Validators.required]]
   });
  }
  
  searchCondiciones(event) {
    this.WsCondicionesDePago.search(event.query).subscribe(data => {
      this.CondicionesDePago = data;
    });
  }

  searchTipoCliente(event) {
    this.WsTipoCliente.search(event.query).subscribe(data => {
      this.TipoCliente = data;
    });
  }

  searchCobrador(event) {
    this.WsCobrador.search(event.query).subscribe(data => {
      this.Cobrador = data;
    });
  }

  searchVendedor(event) {
    this.WsVendedor.search(event.query).subscribe(data => {
      this.Vendedor = data;
    });
  }

  searchMoneda(event) {
    this.WsMoneda.search(event.query).subscribe(data => {
      this.Moneda = data;
    });
  }

  searchZonaCliente(event) {
    this.WsZonaCliente.search(event.query).subscribe(data => {
      this.ZonaCliente = data;
    });
  }


  save () {
    let item = new Cliente(this.FrmDocumento.value);

    this.WsClientes.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
         this.FrmDocumento.reset();
    });
  }

}
