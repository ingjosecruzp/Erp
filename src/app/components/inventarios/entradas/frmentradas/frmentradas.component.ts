import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from '../../../shared/dialog/dialog-ref';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';
import { IFrmBase } from '../../../ifrmbase';
import { FrmBase } from '../../../frmbase';
import {ConfirmationService} from 'primeng/api';
import { Entradas } from '../../../../models/Inventarios/entradas';
import { Concepto } from '../../../../models/Inventarios/concepto';
import { Almacen } from '../../../../models/Inventarios/almacen';
import { TipoconceptoService } from '../../../../services/inventarios/tipoconcepto.service';
import { AlmacenService } from '../../../../services/inventarios/almacen.service';


@Component({
  selector: 'app-frmentradas',
  templateUrl: './frmentradas.component.html'
 
})
export class FrmentradasComponent extends FrmBase<Entradas> implements OnInit, IFrmBase {
  FrmEntradas: FormGroup;
  displayDialog: boolean;
  TipoConceptos: Concepto[];
  Almacen: Almacen[];


  constructor(public config: DialogConfig,
    public dialog: DialogRef,
    private fb: FormBuilder,
    private WsConcepto: TipoconceptoService,
    private WsAlmacenes: AlmacenService,
    private confirmationService: ConfirmationService) {
      super();
    this.displayDialog = true;

     }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      fecha: [null, [Validators.required]],
      folio: [null, [Validators.required]],
      TipoConceptos: [null, [Validators.required]],
      Almacen: [null, [Validators.required]],
      descripcion: [null, [Validators.required]]

   });
  }

}

