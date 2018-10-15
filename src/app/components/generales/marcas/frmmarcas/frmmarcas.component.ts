import { Component, OnInit } from '@angular/core';
import { FrmBase } from 'src/app/components/frmbase';
import { Marca } from '../../../../models/Generales/marca';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { DialogRef } from 'src/app/components/shared/dialog/dialog-ref';
import { MarcaService } from 'src/app/services/Generales/marca.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-frmmarcas',
  templateUrl: './frmmarcas.component.html'
})
export class FrmmarcasComponent extends FrmBase<Marca> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig, public dialog: DialogRef,
    private fb: FormBuilder, private WsMarca: MarcaService,
    private confirmationService: ConfirmationService) { 
      super();
      this.displayDialog = true;
      this.Ws = WsMarca;
    }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: ['', [Validators.required]]
     });
     if (this.config.data._id !== undefined) {
        this.WsMarca.get(this.config.data._id).subscribe(data => {
          this._id = data._id;
          let item = new Marca(data);
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
          this.item = new Marca(this.FrmItem.value);
          super.save();
         },
        reject: () => {
          console.log('cancelar');
        }
      });
    }

}
