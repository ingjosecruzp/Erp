import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { ComplementoPago } from '../../models/complementopago';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DetalleComplementoPago } from '../../models/detallecomplementopago';
import { CondicionesdepagoService } from '../../services/Generales/condicionesdepago.service';
import { CondicionesDePago } from '../../models/condicionesdepago';
import { TipoCliente } from '../../models/tipocliente';
import { TipoclienteService } from '../../services/Generales/tipocliente.service';
import { MonedaService } from '../../services/Generales/moneda.service';
import { VendedorService } from '../../services/Generales/vendedor.service';
import { CobradorService } from '../../services/Generales/cobrador.service';
import { ZonaclienteService } from '../../services/Generales/zonacliente.service';
import { Moneda } from '../../models/Generales/moneda';
import { Vendedor } from '../../models/Generales/vendedor';
import { Cobrador } from '../../models/Generales/cobrador';
import { ZonaCliente } from '../../models/Generales/zonacliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {
   FrmDocumento: FormGroup;
   clientes: Cliente[] = [];
   cols: any[];
   selectedCliente: Cliente;
   displayDialog: boolean;
   Documento: ComplementoPago;
   CondicionesDePago: CondicionesDePago[];
   TipoCliente: TipoCliente[];
   Moneda: Moneda[];
   Vendedor: Vendedor[];
   Cobrador: Cobrador[];
   ZonaCliente: ZonaCliente[];

  constructor(private WsClientes: ClienteService, private WsCondicionesDePago: CondicionesdepagoService,
              private WsTipoCliente: TipoclienteService, private fb: FormBuilder, private WsMoneda: MonedaService,
              private WsVendedor: VendedorService, private WsCobrador: CobradorService, 
              private WsZonaCliente: ZonaclienteService) {

  }

  saveCliente() {
    console.log('Save desde clienteComponent');
    this.displayDialog = true;
  }

  ngOnInit() {
   this.cols = [
     { field: 'Rfc', header: 'Rfc' },
     { field: 'RazonSocial', header: 'Razon Social' },
     { field: 'Pais', header: 'Pais' }
   ];

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

    // this.FrmDocumento = this.fb.group(new Cliente());

   /*this.FrmDocumento = this.fb.group({
      Serie: ['', [Validators.required]],
      Folio: ['', [Validators.required]],
      Cliente: this.fb.group({
        Rfc: ['', [Validators.required]],
        RazonSocial: ['', [Validators.required]],
        Cp: ['', [Validators.required]],
        Email: ['', [Validators.required]]
      }),
      Detalles: this.fb.array([
        this.fb.group({
          UUID: ['', [Validators.required]],
          Folio: ['', [Validators.required]],
        })
      ])
   });*/
   // this.add();
  }

  save () {
    /*if( this.FrmDocumento.status !== 'INVALID' ) 
    {*/
      let item = new Cliente(this.FrmDocumento.value);
      // console.log(item);
      // console.log(JSON.stringify(item));
      this.WsClientes.save(item).subscribe(data => {
         console.log('Guardado');
      });
      /*console.log(this.FrmDocumento.value);*/
    //}
  }

  add() {
    console.log('add');
    this.Detalles.push(this.fb.group({
      UUID: ['test', [Validators.required]],
      Folio: ['test2', [Validators.required]],
    }));
  }

  get Detalles() {
     // console.log(this.FrmDocumento.get('Detalles') as FormArray);
    return this.FrmDocumento.get('Detalles') as FormArray;
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

}
