import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { ConfirmationService } from 'primeng/api';
import { FrmBase } from '../../../frmbase';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Procedencia } from '../../../../models/Inventarios/procedencia';
import { ProcedenciaService } from '../../../../services/inventarios/procedencia.service';

@Component({
  selector: 'app-frmprocedencias',
  templateUrl: './frmprocedencias.component.html'
})
export class FrmprocedenciasComponent extends FrmBase<Procedencia> implements OnInit {
  FrmDocumento: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder,
    private WsProcedencia: ProcedenciaService, private confirmationService: ConfirmationService) {
      super();
    this.displayDialog = true;
    this.Ws = WsProcedencia;
    // console.log(config.data._id);
     }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
    this.WsProcedencia.get(this.config.data._id).subscribe(data => {
      this._id = data._id;
      let item = new Procedencia(data);
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
          this.item = new Procedencia(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }

}

