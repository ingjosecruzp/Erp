import { Component, OnInit } from '@angular/core';
import { FrmBase } from 'src/app/components/frmbase';
import { TipoConcepto } from 'src/app/models/Inventarios/tipoconcepto';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogConfig } from 'src/app/components/shared/dialog/dialog-config';
import { DialogRef } from 'src/app/components/shared/dialog/dialog-ref';
import { TipoconceptoService } from 'src/app/services/inventarios/tipoconcepto.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-frmtipoconceptos',
  templateUrl: './frmtipoconceptos.component.html'
})
export class FrmtipoconceptosComponent extends FrmBase<TipoConcepto> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef,
    private fb: FormBuilder, private WsTipoConcepto: TipoconceptoService,
    private confirmationService: ConfirmationService) { 
      super();
      this.displayDialog = true;
      this.Ws = WsTipoConcepto;
    }

  ngOnInit() {
  }

}
