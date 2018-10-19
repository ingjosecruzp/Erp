import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { Entradas } from '../../../../models/Inventarios/entradas';

@Component({
  selector: 'app-frmentradas',
  templateUrl: './frmentradas.component.html'
 
})
export class FrmentradasComponent extends FrmBase<Entradas> implements OnInit, IFrmBase {
  FrmEntradas: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig,
    public dialog: DialogRef,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService) {
      super();
    this.displayDialog = true;

     }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: [null, [Validators.required]],
      TipoComponente: [null, [Validators.required]]
   });
  }

}

