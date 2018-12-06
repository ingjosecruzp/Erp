import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { ConfirmationService } from 'primeng/api';
import { FrmBase } from '../../../frmbase';
import { Peso } from '../../../../models/Inventarios/peso';
import { PesoService } from '../../../../services/inventarios/peso.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-frmpeso',
  templateUrl: './frmpeso.component.html'
})
export class FrmpesoComponent extends FrmBase<Peso> implements OnInit {
  FrmDocumento: FormGroup;
  displayDialog: boolean;
  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder,
  private WsUnindad: PesoService, private confirmationService: ConfirmationService) {
    super();
    this.displayDialog = true;
    this.Ws = WsUnindad;
    // console.log(config.data._id);
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
   });

   if (this.config.data._id !== undefined) {
    this.WsUnindad.get(this.config.data._id).subscribe(data => {
      this._id = data._id;
      let item = new Peso(data);
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
          this.item = new Peso(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
  }


}
