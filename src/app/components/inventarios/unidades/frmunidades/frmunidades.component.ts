import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Unidad } from '../../../../models/Generales/Unidad';
import { UnidadService } from '../../../../services/inventarios/unidad.service';

@Component({
  selector: 'app-frmunidades',
  templateUrl: './frmunidades.component.html'
})
export class FrmunidadesComponent implements OnInit {
  FrmDocumento: FormGroup;
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, private WsUnindad: UnidadService) {this.displayDialog = true; }

  ngOnInit() {
    this.FrmDocumento = this.fb.group({
      Nombre: ['', [Validators.required]],
      Abreviatura: ['', [Validators.required]],
   });
  }

  save () {

    let item = new Unidad(this.FrmDocumento.value);

    this.WsUnindad.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
    });
  }

}
