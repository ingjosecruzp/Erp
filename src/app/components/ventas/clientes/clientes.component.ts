import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/ventas/cliente.service';
import { Cliente } from '../../../models/cliente';
import { FormGroup, FormArray } from '@angular/forms';
import { DialogService } from '../../../services/dinamicos/dialog.service';
import { FrmclientesComponent } from './frmclientes/frmclientes.component';
import {ConfirmationService} from 'primeng/api';

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

  constructor(private WsClientes: ClienteService, public dialog: DialogService,  private confirmationService: ConfirmationService) {

  }

  add() {
    const ref = this.dialog.open(FrmclientesComponent, { 
                   data: { message: 'I am a dynamic component inside of a dialog!'} });
    /*ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });*/

  }

  refresh() {
    this.WsClientes.getAll().subscribe(data => {
      this.clientes = data;
     });
  }

  open(item: Cliente) {
    const ref = this.dialog.open(FrmclientesComponent, { 
      data: { _id: item._id} });
  }

  ngOnInit() {
   this.cols = [
     { field: 'Rfc', header: 'Rfc' },
     { field: 'Nombre', header: 'Razon Social' },
     { field: 'TipoCliente.Nombre', header: 'Tipo Cliente' },
     { field: 'Cobrador.Nombre', header: 'Cobrador' }
   ];

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

  save (test) {
    console.log(test);
    console.log('save');
    /*if( this.FrmDocumento.status !== 'INVALID' ) 
    {*/
      // let item = new Cliente(this.FrmDocumento.value);
      // console.log(item);
      // console.log(JSON.stringify(item));
      /*this.WsClientes.save(item).subscribe(data => {
         console.log('Guardado');
      });*/
      /*console.log(this.FrmDocumento.value);*/
    // }
  }

 /* add() {
    console.log('add');
    this.Detalles.push(this.fb.group({
      UUID: ['test', [Validators.required]],
      Folio: ['test2', [Validators.required]],
    }));
  }*/

  /*get Detalles() {
     // console.log(this.FrmDocumento.get('Detalles') as FormArray);
    // return this.FrmDocumento.get('Detalles') as FormArray;
  }*/

}
