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
  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, private WsUnindad: UnidadService) {
    this.displayDialog = true;
    console.log(config.data._id);
   }

  ngOnInit() {
    this.FrmDocumento = this.fb.group({
      Nombre: ['', [Validators.required]],
      Abreviatura: ['', [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
    this.WsUnindad.get(this.config.data._id).subscribe(data => {
       console.log(data);
    });
  }
  }



  save () {

    let item = new Unidad(this.FrmDocumento.value);

    this.WsUnindad.save(item).subscribe(data => {
         console.log('Guardado');
         console.log(data);
         this.FrmDocumento.reset();
    });
  }

}
