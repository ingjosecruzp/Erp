import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { TipoclienteService } from '../../../../services/Generales/tipocliente.service';
import { MonedaService } from '../../../../services/Generales/moneda.service';
import { VendedorService } from '../../../../services/Generales/vendedor.service';
import { CobradorService } from '../../../../services/Generales/cobrador.service';
import { ZonaclienteService } from '../../../../services/Generales/zonacliente.service';
import { CondicionesdepagoService } from '../../../../services/Generales/condicionesdepago.service';
import { ClienteService } from '../../../../services/ventas/cliente.service';

import { Cliente } from '../../../../models/cliente';


import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-frmclientes',
  templateUrl: './frmclientes.component.html',
  styleUrls: []
})
export class FrmclientesComponent extends FrmBase<Cliente> implements OnInit, IFrmBase {
  clientes: Cliente[] = [];
  cols: any[];
  selectedCliente: Cliente;
  displayDialog: boolean;

  constructor(private WsClientes: ClienteService, private WsCondicionesDePago: CondicionesdepagoService,
    private WsTipoCliente: TipoclienteService, private fb: FormBuilder, private WsMoneda: MonedaService,
    private WsVendedor: VendedorService, private WsCobrador: CobradorService, 
    private WsZonaCliente: ZonaclienteService, public config: DialogConfig, public dialog: DialogRef,
    private confirmationService: ConfirmationService) {
      super();
      this.displayDialog = true;
      this.Ws = WsClientes;
  }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      Rfc: [null, [Validators.required]],
      Contacto1: [null, []],
      Contacto2: [null, []],
      CondicionesDePago: [null, [Validators.required]],
      TipoCliente: [null, [Validators.required]],
      LimiteCredito: [null, [Validators.required]],
      ZonaCliente: [null, [Validators.required]],
      Moneda: [null, [Validators.required]],
      Cobrador: [null, [Validators.required]],
      Vendedor: [null, [Validators.required]]
   });

    if (this.config.data._id !== undefined) {
      this.WsClientes.get(this.config.data._id).subscribe(data => {
         this._id = data._id;
         let item = new Cliente(data);
         this.FrmItem.patchValue(item);
      });
    }
  }

  save () {
    this.confirmationService.confirm({
        message: '¿Esta seguro de guardar la información?',
        header: 'Erp',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.item = new Cliente(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }

}
