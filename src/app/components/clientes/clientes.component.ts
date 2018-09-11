import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { ComplementoPago } from '../../models/complementopago';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DetalleComplementoPago } from '../../models/detallecomplementopago';

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

  constructor(private WsClientes: ClienteService, private fb: FormBuilder) {

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
   });
   this.add();
  }

  save () {
    console.log(this.FrmDocumento.value);
    console.log(this.FrmDocumento.value.Cliente);
  }

  add() {
    console.log('add');
    this.Detalles.push(this.fb.group({
      UUID: ['test', [Validators.required]],
      Folio: ['test2', [Validators.required]],
    }));
  }

  get Detalles() {
     //console.log(this.FrmDocumento.get('Detalles') as FormArray);
    return this.FrmDocumento.get('Detalles') as FormArray;
  }
}
