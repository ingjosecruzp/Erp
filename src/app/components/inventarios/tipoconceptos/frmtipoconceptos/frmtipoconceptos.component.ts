import { Component, OnInit } from '@angular/core';
import { FrmBase } from 'src/app/components/frmbase';
import { TipoConcepto } from 'src/app/models/Inventarios/tipoconcepto';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      this.FrmItem = this.fb.group({
        Nombre: ['', [Validators.required]]
     });
     if (this.config.data._id !== undefined) {
      this.WsTipoConcepto.get(this.config.data._id).subscribe(data => {
          this._id = data._id;
          let item = new TipoConcepto(data);
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
          this.item = new TipoConcepto(this.FrmItem.value);
          super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
    }

   
}
