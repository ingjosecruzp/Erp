import { Component, OnInit } from '@angular/core';
import { FrmBase } from 'src/app/components/frmbase';
import { Puesto } from 'src/app/models/Generales/puesto';
import { IFrmBase } from 'src/app/components/ifrmbase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departamento } from '../../../../models/Generales/departamento';
import { DialogRef } from 'src/app/components/shared/dialog/dialog-ref';
import { DialogConfig } from 'src/app/components/shared/dialog/dialog-config';
import { DepartamentoService } from 'src/app/services/Generales/departamento.service';
import { PuestoService } from '../../../../services/Generales/puesto.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-frmpuestos',
  templateUrl: './frmpuestos.component.html'
})
export class FrmpuestosComponent extends FrmBase<Puesto> implements OnInit, IFrmBase {
  FrmItem: FormGroup;
  displayDialog: boolean;
  Departamento: Departamento[];


  constructor(public config: DialogConfig, public dialog: DialogRef, private fb: FormBuilder,
    private WsDepartamento: DepartamentoService, private WsPuesto: PuestoService,
     private confirmationService: ConfirmationService ) { 
      super();
      this.displayDialog = true;
      this.Ws = WsPuesto;
     }

     ngOnInit() {
      this.FrmItem = this.fb.group({
        Nombre: [null, [Validators.required]],
        Departamento: [null, [Validators.required]]
     });

     if (this.config.data._id !== undefined) {
      this.WsPuesto.get(this.config.data._id).subscribe(data => {
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
          this.item = new Puesto(this.FrmItem.value);
      super.save();
        },
        reject: () => {
          console.log('cancelar');
        }
    });
    }
}
