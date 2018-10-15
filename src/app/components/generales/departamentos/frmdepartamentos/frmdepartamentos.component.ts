import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../../../models/Generales/departamento';
import { FrmBase } from 'src/app/components/frmbase';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { DialogRef } from 'src/app/components/shared/dialog/dialog-ref';
import { DialogConfig } from '../../../shared/dialog/dialog-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartamentoService } from '../../../../services/Generales/departamento.service';
import { ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-frmdepartamentos',
  templateUrl: './frmdepartamentos.component.html'
})
export class FrmdepartamentosComponent extends FrmBase<Departamento> implements OnInit, IFrmBase {
  
  FrmItem: FormGroup;
  displayDialog: boolean;

  constructor(public config: DialogConfig,  public dialog: DialogRef, private fb: FormBuilder, private WsDepartamento: DepartamentoService,
    private confirmationService: ConfirmationService) {
    super();
    this.displayDialog = true;
    this.Ws = WsDepartamento;
   }

  ngOnInit() {
    this.FrmItem = this.fb.group({
      Nombre: ['', [Validators.required]]
     });
     if (this.config.data._id !== undefined) {
        this.WsDepartamento.get(this.config.data._id).subscribe(data => {
          this._id = data._id;
          let item = new Departamento(data);
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
        this.item = new Departamento(this.FrmItem.value);
        super.save();
       },
      reject: () => {
        console.log('cancelar');
      }
    });
  }
}
