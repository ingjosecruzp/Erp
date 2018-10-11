import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Unidad } from '../../../../models/Generales/Unidad';
import { UnidadService } from '../../../../services/inventarios/unidad.service';
import { FrmBase } from 'src/app/components/frmbase';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-frmunidades',
  templateUrl: './frmunidades.component.html'
})
export class FrmunidadesComponent extends FrmBase<Unidad> implements OnInit {
  FrmDocumento: FormGroup;
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder, private WsUnindad: UnidadService, private confirmationService: ConfirmationService) {
    super();
    this.displayDialog = true;
    this.Ws = WsUnindad;
    // console.log(config.data._id);
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      Abreviatura: [null, [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
    this.WsUnindad.get(this.config.data._id).subscribe(data => {
      this._id = data._id;
      let item = new Unidad(data);
      this.FrmItem.patchValue(item);
      console.log('Respuesta del servidor', data);
    });
  }
  }

  save () {
    this.confirmationService.confirm({
        message: '¿Esta seguro de guardar la información?',
        header: 'Erp',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.item = new Unidad(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }


}
