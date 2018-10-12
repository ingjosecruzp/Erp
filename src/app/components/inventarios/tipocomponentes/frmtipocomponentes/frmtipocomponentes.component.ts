import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TipocomponenteService } from '../../../../services/inventarios/tipocomponente.service';
import { TipoComponente } from '../../../../models/Generales/tipocomponente';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';


@Component({
  selector: 'app-frmtipocomponentes',
  templateUrl: './frmtipocomponentes.component.html',

})
export class FrmtipocomponentesComponent extends FrmBase<TipoComponente> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef,
               private fb: FormBuilder, private WsTipoComponente: TipocomponenteService,
               private confirmationService: ConfirmationService) {
    super();
    this.displayDialog = true;
    this.Ws = WsTipoComponente;
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: ['', [Validators.required]]
   });
   
   if (this.config.data._id !== undefined) {
    this.WsTipoComponente.get(this.config.data._id).subscribe(data => {
        this._id = data._id;
        let item = new TipoComponente(data);
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
        this.item = new TipoComponente(this.FrmItem.value);
        super.save();
      },
      reject: () => {
        console.log('cancelar');
      }
  });
  }

}
